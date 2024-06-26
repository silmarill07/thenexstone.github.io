document.getElementById('contentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвратить отправку формы
  
  // Получить данные из формы
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;

  // Сохранить данные в Local Storage
  localStorage.setItem('title', title);
  localStorage.setItem('content', content);

  alert('Данные сохранены успешно!');
});

// Загрузка данных из Local Storage при загрузке страницы
window.onload = function() {
  let savedTitle = localStorage.getItem('title');
  let savedContent = localStorage.getItem('content');

  if (savedTitle) {
    document.getElementById('title').value = savedTitle;
  }
  if (savedContent) {
    document.getElementById('content').value = savedContent;
  }
}
