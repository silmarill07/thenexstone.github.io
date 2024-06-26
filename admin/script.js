document.getElementById('contentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвратить отправку формы
  
  // Получить данные из формы
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;

  // Сохранить данные в Local Storage или отправить на сервер
  // В данном примере сохраняем в Local Storage
  localStorage.setItem('title', title);
  localStorage.setItem('content', content);

  alert('Данные сохранены успешно!');
});
