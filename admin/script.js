// Проверяем, есть ли сохранённый пароль в localStorage
const storedPassword = localStorage.getItem('adminPassword');

// Если пароль не установлен, предлагаем создать новый аккаунт
if (!storedPassword) {
  const newPassword = prompt('Для начала работы введите новый пароль:');
  if (newPassword) {
    localStorage.setItem('adminPassword', newPassword);
    alert('Аккаунт создан. Перезагрузите страницу для входа.');
  }
} else {
  // Если пароль установлен, предлагаем войти
  const enteredPassword = prompt('Введите пароль:');
  if (enteredPassword === storedPassword) {
    // Пароль верный, активируем режим редактирования
    activateEditMode();
  } else {
    alert('Неверный пароль. Попробуйте еще раз.');
  }
}

// Функция для активации режима редактирования
function activateEditMode() {
  // Показываем форму для редактирования
  document.getElementById('contentForm').style.display = 'block';
  
  // Загружаем текущие данные страницы в форму
  loadPageData();
}

// Функция для загрузки данных страницы в форму
function loadPageData() {
  let pageTitle = document.getElementById('title');
  let pageContent = document.getElementById('content');
  
  // Определяем текущий путь страницы и загружаем соответствующие данные
  const path = window.location.pathname;
  
  if (path === '/' || path === '/index.html') {
    pageTitle.textContent = 'Заголовок главной страницы';
    pageContent.textContent = 'Содержимое главной страницы';
  } else if (path === '/ua.html') {
    pageTitle.textContent = 'Заголовок украинской страницы';
    pageContent.textContent = 'Содержимое украинской страницы';
  } else {
    // Для других страниц, если они не определены выше
    pageTitle.textContent = 'Другая страница';
    pageContent.textContent = 'Другое содержимое';
  }
}

// Обработчик события отправки формы
document.getElementById('contentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы
  
  // Получаем данные из формы
  let formData = new FormData(this);
  
  // Выводим данные в консоль (замените на логику сохранения на сервере)
  for (let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
  
  // Выводим сообщение об успешном сохранении
  alert('Данные сохранены!');
});
