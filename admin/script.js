// script.js

// Функция для активации режима редактирования
function activateEditMode() {
  // Показать форму для редактирования
  document.getElementById('contentForm').style.display = 'block';
  
  // Загрузить текущие данные страницы в форму
  loadPageData();
}

// Функция для загрузки данных страницы в форму
function loadPageData(pageName) {
  // Установить значения в зависимости от имени страницы
  switch (pageName) {
    case 'index':
      // Если текущая страница - index.html
      document.title = 'Главная страница';
      document.getElementById('main-title').textContent = 'Заголовок главной страницы';
      document.getElementById('main-content').textContent = 'Содержимое главной страницы';
      break;
    case 'ua':
      // Если текущая страница - ua.html
      document.title = 'Українська сторінка';
      document.getElementById('main-title').textContent = 'Заголовок української сторінки';
      document.getElementById('main-content').textContent = 'Зміст української сторінки';
      break;
    // Добавить другие страницы по мере необходимости
    default:
      // Если страница не найдена, использовать значения по умолчанию
      document.title = 'Страница';
      document.getElementById('main-title').textContent = 'Заголовок страницы';
      document.getElementById('main-content').textContent = 'Содержимое страницы';
      break;
  }
}

// Пример: добавление кнопки для активации редактирования
let editButton = document.createElement('button');
editButton.textContent = 'Редактировать';
editButton.addEventListener('click', function() {
  activateEditMode();
});
document.body.appendChild(editButton);

// Поиск всех .html файлов в корне сайта и их обработка
document.addEventListener('DOMContentLoaded', function() {
  fetchHtmlPages();
});

function fetchHtmlPages() {
  fetch('/html-pages') // Возможно, потребуется настроить маршрут на вашем сервере
    .then(response => response.json())
    .then(data => {
      // Обработка полученных данных (список .html файлов)
      data.forEach(page => {
        let pageName = page.replace('.html', '');
        let option = document.createElement('option');
        option.textContent = pageName;
        option.value = pageName;
        document.getElementById('pageSelect').appendChild(option);
      });
    })
    .catch(error => console.error('Ошибка получения .html файлов:', error));
}

// script.js

const adminPasswordKey = 'adminPassword';

// Функция для проверки, установлен ли пароль
function checkPassword() {
    let storedPassword = localStorage.getItem(adminPasswordKey);
    if (!storedPassword) {
        // Если пароль не установлен, предложить создать
        let newPassword = prompt('Enter a new password for admin access:');
        if (newPassword) {
            localStorage.setItem(adminPasswordKey, newPassword);
            alert('Password set successfully! Please login again.');
        } else {
            alert('Password cannot be empty. Please set a valid password.');
        }
        return false;
    }
    return true;
}

// Обработчик события отправки формы
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить отправку формы

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Проверить пароль
    if (checkPassword()) {
        // Проверка логина и пароля (здесь вы можете использовать более сложную логику проверки)
        if (password === localStorage.getItem(adminPasswordKey)) {
            // Войти в админ панель
            alert('Login successful! You can now edit the website content.');
            // Добавить код для перехода к редактированию сайта
            activateEditMode(); // Ваша функция активации режима редактирования
        } else {
            alert('Invalid username or password. Please try again.');
        }
    }
});
