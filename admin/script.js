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
  // Загружаем страницу сайта в iframe
  const iframe = document.createElement('iframe');
  iframe.src = '/index.html'; // Поменяйте на нужный URL страницы сайта
  document.body.appendChild(iframe);
  
  // Стилизуем iframe для редактирования
  iframe.style.width = '100%';
  iframe.style.height = '100vh';
  iframe.style.border = 'none';
  
  // Функция для перехвата содержимого iframe и его редактирования
  iframe.onload = function() {
    const contentDocument = iframe.contentDocument || iframe.contentWindow.document;
    
    // Пример редактирования заголовка
    const mainTitle = contentDocument.getElementById('main-title');
    if (mainTitle) {
      mainTitle.contentEditable = true; // Делаем заголовок редактируемым
      mainTitle.style.border = '1px solid #ccc'; // Пример стилизации редактируемого элемента
    }
    
    // Пример редактирования содержимого
    const mainContent = contentDocument.getElementById('main-content');
    if (mainContent) {
      mainContent.contentEditable = true; // Делаем содержимое редактируемым
      mainContent.style.border = '1px solid #ccc'; // Пример стилизации редактируемого элемента
    }
    
    // Добавляем кнопку сохранения изменений
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Сохранить изменения';
    saveButton.addEventListener('click', function() {
      // Сохраняем изменения (здесь можно отправить изменения на сервер или в localStorage)
      console.log('Сохраняем изменения:', {
        title: mainTitle.innerText,
        content: mainContent.innerText
      });
      alert('Изменения сохранены!');
    });
    document.body.appendChild(saveButton);
  };
}
