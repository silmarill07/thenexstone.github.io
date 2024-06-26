// Функция для шифрования пароля
function encryptPassword(password) {
  // Простой пример шифрования для демонстрации
  return btoa(password); // Base64 encoding
}

// Функция для отображения формы входа
function showLoginForm() {
  clearForms(); // Очищаем текущие формы перед добавлением новой
  const form = document.createElement('form');
  form.classList.add('centered-form');
  form.innerHTML = `
    <h1>Вход в систему</h1>
    <label for="username">Логин:</label><br>
    <input type="text" id="username" name="username" required><br><br>
    <label for="password">Пароль:</label><br>
    <input type="password" id="password" name="password" required><br><br>
    <button type="submit">Войти</button>
  `;
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const storedPassword = localStorage.getItem(enteredUsername);
    
    if (!storedPassword) {
      alert('Пользователь не найден. Создайте аккаунт.');
      showCreateAccountForm();
    } else {
      if (encryptPassword(enteredPassword) === storedPassword) {
        activateEditMode();
      } else {
        alert('Неверный пароль. Попробуйте еще раз.');
      }
    }
  });
  document.body.appendChild(form);
}

// Функция для отображения формы создания аккаунта
function showCreateAccountForm() {
  clearForms(); // Очищаем текущие формы перед добавлением новой
  const form = document.createElement('form');
  form.classList.add('centered-form');
  form.innerHTML = `
    <h1>Создание аккаунта</h1>
    <label for="newUsername">Логин:</label><br>
    <input type="text" id="newUsername" name="newUsername" required><br><br>
    <label for="newPassword">Пароль:</label><br>
    <input type="password" id="newPassword" name="newPassword" required><br><br>
    <label for="securityQuestion">Проверочное слово:</label><br>
    <input type="text" id="securityQuestion" name="securityQuestion" required><br><br>
    <button type="submit">Создать аккаунт</button>
  `;
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const securityQuestion = document.getElementById('securityQuestion').value;
    
    if (newUsername && newPassword && securityQuestion) {
      const existingPassword = localStorage.getItem(newUsername);
      if (existingPassword) {
        alert('Пользователь уже существует. Войдите или выберите другое имя пользователя.');
        showLoginForm();
      } else {
        localStorage.setItem(newUsername, encryptPassword(newPassword));
        localStorage.setItem(`${newUsername}-security`, securityQuestion.toLowerCase());
        alert('Аккаунт создан. Теперь вы можете войти.');
        showLoginForm();
      }
    }
  });
  document.body.appendChild(form);
}

// Функция для удаления текущих форм
function clearForms() {
  const forms = document.querySelectorAll('.centered-form');
  forms.forEach(form => form.remove());
}

// Показываем форму входа при загрузке страницы
showLoginForm();

// Функция для активации режима редактирования
function activateEditMode() {
  clearForms(); // Очищаем формы после входа в систему

  // Создаем редактируемый контейнер
  const editableContainer = document.createElement('div');
  editableContainer.classList.add('editable-container');
  document.body.appendChild(editableContainer);

  // Загружаем index.html в iframe для редактирования
  const iframe = document.createElement('iframe');
  iframe.src = 'index.html'; // Поменяйте на нужный URL страницы сайта
  iframe.style.width = '100%';
  iframe.style.height = 'calc(100vh - 50px)'; // Высота минус высота панели инструментов
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
