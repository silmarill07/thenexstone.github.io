// Функция для шифрования пароля
function encryptPassword(password) {
  // Простой пример шифрования для целей демонстрации
  return btoa(password); // Base64 encoding
}

// Проверяем, есть ли сохранённый пароль в localStorage
const storedPassword = localStorage.getItem('adminPassword');

// Если пароль не установлен, отображаем форму для создания аккаунта
if (!storedPassword) {
  showCreateAccountForm();
} else {
  // Если пароль установлен, отображаем форму для входа
  showLoginForm();
}

// Функция для отображения формы создания аккаунта
function showCreateAccountForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <h1>Создание аккаунта</h1>
    <label for="newPassword">Введите новый пароль:</label><br>
    <input type="password" id="newPassword" name="newPassword" required><br><br>
    <button type="submit">Создать аккаунт</button>
  `;
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newPassword = document.getElementById('newPassword').value;
    if (newPassword) {
      localStorage.setItem('adminPassword', encryptPassword(newPassword));
      alert('Аккаунт создан. Перезагрузите страницу для входа.');
    }
  });
  document.body.appendChild(form);
}

// Функция для отображения формы входа
function showLoginForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <h1>Вход в систему</h1>
    <label for="password">Введите пароль:</label><br>
    <input type="password" id="password" name="password" required><br><br>
    <button type="submit">Войти</button>
  `;
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const enteredPassword = document.getElementById('password').value;
    if (encryptPassword(enteredPassword) === storedPassword) {
      activateEditMode();
    } else {
      alert('Неверный пароль. Попробуйте еще раз.');
    }
  });
  document.body.appendChild(form);
}

// Функция для активации режима редактирования
function activateEditMode() {
  // Очищаем страницу от формы входа
  document.body.innerHTML = '';

  // Создаем редактируемый контейнер
  const editableContainer = document.createElement('div');
  editableContainer.classList.add('editable-container');
  document.body.appendChild(editableContainer);

  // Загружаем index.html в iframe для редактирования
  const iframe = document.createElement('iframe');
  iframe.src = 'index.html'; // Поменяйте на нужный URL страницы сайта
  iframe.style.width = '100%';
  iframe.style.height = '100vh';
  iframe.style.border = 'none';
  editableContainer.appendChild(iframe);

  // Добавляем панель инструментов
  const toolbar = createToolbar();
  document.body.appendChild(toolbar);
}

// Функция для создания панели редактирования текста
function createToolbar() {
  const toolbar = document.createElement('div');
  toolbar.classList.add('toolbar');
  
  // Добавляем кнопки для стилизации текста
  const buttons = [
    { icon: 'format_bold', command: 'bold' },
    { icon: 'format_italic', command: 'italic' },
    { icon: 'format_align_left', command: 'justifyLeft' },
    { icon: 'format_align_center', command: 'justifyCenter' },
    { icon: 'format_align_right', command: 'justifyRight' },
    { icon: 'format_size', command: 'fontSize', value: '4' },
    { icon: 'format_color_text', command: 'foreColor', value: 'red' },
    { icon: 'format_color_fill', command: 'backColor', value: 'yellow' },
  ];
  
  buttons.forEach(button => {
    const buttonElement = document.createElement('button');
    buttonElement.innerHTML = `<i class="material-icons">${button.icon}</i>`;
    buttonElement.addEventListener('click', () => {
      document.execCommand(button.command, false, button.value || null);
    });
    toolbar.appendChild(buttonElement);
  });
  
  return toolbar;
}
