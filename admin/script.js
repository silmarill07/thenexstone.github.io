// script.js

// Функция для активации режима редактирования
function activateEditMode() {
  // Показать заголовок
  document.getElementById('main-title').style.display = 'block';
  
  // Показать содержимое страницы
  document.getElementById('main-content').style.display = 'block';
  
  // Загрузить текущие данные страницы в форму
  loadPageData();
}

// Функция для загрузки данных страницы в форму
function loadPageData() {
  // Здесь можно реализовать загрузку данных страницы из сервера или Local Storage
  // В данном примере просто устанавливаются значения по умолчанию
  document.getElementById('title').value = 'Заголовок страницы';
  document.getElementById('content').value = 'Содержимое страницы';
}

// Обработчик события отправки формы
document.getElementById('contentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвратить отправку формы
  
  // Получить данные из формы
  let formData = new FormData(this);
  
  // В данном примере данные просто выводятся в консоль
  for (let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
  
  // Можно добавить здесь логику для отправки данных на сервер и сохранения
  // Пока просто выводим данные в консоль
  console.log('Данные сохранены:', formData);
});

// Пример: добавление кнопки для активации редактирования
let editButton = document.createElement('button');
editButton.textContent = 'Редактировать';
editButton.addEventListener('click', function() {
  activateEditMode();
});
document.body.appendChild(editButton);
