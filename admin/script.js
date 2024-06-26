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
      localStorage.setItem('adminPassword', newPassword);
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
    if (enteredPassword === storedPassword) {
      activateEditMode();
    } else {
      alert('Неверный пароль. Попробуйте еще раз.');
    }
  });
  document.body.appendChild(form);
}

// Функция для активации режима редактирования
function activateEditMode() {
  // Загружаем страницу сайта в редактируемый контейнер
  const editableContainer = document.createElement('div');
  editableContainer.classList.add('editable-container');
  document.body.appendChild(editableContainer);
  
  const iframe = document.createElement('iframe');
  iframe.src = 'index.html'; // Поменяйте на нужный URL страницы сайта
  iframe.style.display = 'none'; // Скрываем iframe
  document.body.appendChild(iframe);
  
  // Загружаем содержимое страницы в редактируемый контейнер
  iframe.onload = function() {
    const contentDocument = iframe.contentDocument || iframe.contentWindow.document;
    const pageTitle = contentDocument.getElementById('main-title');
    const pageContent = contentDocument.getElementById('main-content');
    
    // Помещаем заголовок и содержимое страницы в редактируемый контейнер
    if (pageTitle) {
      const editableTitle = createEditableElement(pageTitle);
      editableContainer.appendChild(editableTitle);
    }
    if (pageContent) {
      const editableContent = createEditableElement(pageContent);
      editableContainer.appendChild(editableContent);
    }
    
    // Отображаем редактируемый контейнер
    editableContainer.style.display = 'block';
  };
}

// Функция для создания редактируемого элемента
function createEditableElement(originalElement) {
  const editableElement = document.createElement('div');
  editableElement.contentEditable = true;
  editableElement.innerHTML = originalElement.innerHTML;
  editableElement.classList.add('editable');
  
  // Добавляем стандартную панель редактирования текста
  const toolbar = createToolbar();
  editableElement.insertBefore(toolbar, editableElement.firstChild);
  
  return editableElement;
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
