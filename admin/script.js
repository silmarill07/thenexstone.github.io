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

// Функция для активации режима редактирования
function activateEditMode() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.edit-container').style.display = 'block';
    loadPageData(); // Загрузка данных страницы после активации режима
}

// Функция для загрузки данных страницы в форму
function loadPageData() {
    let pageTitleInput = document.getElementById('title');
    let pageContentInput = document.getElementById('content');

    // Определение заголовка и содержимого в зависимости от текущей страницы
    let currentPage = getCurrentPage();
    fetch(currentPage)
        .then(response => response.text())
        .then(data => {
            // Парсинг HTML содержимого
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, 'text/html');

            // Получаем заголовок и содержимое
            let title = doc.querySelector('title').textContent;
            let content = doc.querySelector('body').innerHTML;

            // Устанавливаем значения в форму редактирования
            pageTitleInput.value = title;
            pageContentInput.value = content;
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных страницы:', error);
            alert('Произошла ошибка при загрузке данных страницы.');
        });
}

// Функция для определения текущей страницы
function getCurrentPage() {
    let path = window.location.pathname;
    if (path.endsWith('/')) {
        path += 'index.html'; // По умолчанию, если это корневой путь
    }
    return path;
}

// Обработчик события отправки формы входа
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить отправку формы

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Проверить пароль
    if (checkPassword()) {
        // Пример простой проверки пароля (лучше использовать более надежные методы)
        if (password === localStorage.getItem(adminPasswordKey)) {
            // Вход успешен, активировать режим редактирования
            activateEditMode();
        } else {
            alert('Invalid username or password. Please try again.');
        }
    }
});

// Обработчик события отправки формы редактирования контента
document.getElementById('contentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить отправку формы

    // Получить данные из формы
    let formData = new FormData(this);

    // В данном примере данные выводятся в консоль
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    // Ваш код для отправки данных на сервер и сохранения
    // Здесь можно добавить логику для сохранения изменений
    alert('Changes saved successfully!');
});
