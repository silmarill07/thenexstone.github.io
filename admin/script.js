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
    loadPageData();
}

// Функция для загрузки данных страницы в форму
function loadPageData() {
    let pageTitle = document.getElementById('title');
    let pageContent = document.getElementById('content');

    // Определение заголовка и содержимого в зависимости от текущей страницы
    if (location.pathname.includes('index.html')) {
        pageTitle.value = 'Заголовок главной страницы';
        pageContent.value = 'Содержимое главной страницы';
    } else if (location.pathname.includes('ua.html')) {
        pageTitle.value = 'Заголовок української сторінки';
        pageContent.value = 'Зміст української сторінки';
    }
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
