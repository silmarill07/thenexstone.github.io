// admin/admin-script.js

// Обработчик события отправки формы
document.getElementById('contentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить отправку формы
    
    // Получить данные из формы
    let formData = new FormData(this);
    
    // Обновить заголовок и содержимое страницы на основе данных формы
    let pageTitle = document.getElementById('main-title');
    let pageContent = document.getElementById('main-content');
    
    if (pageTitle && pageContent) {
      pageTitle.textContent = formData.get('title');
      pageContent.textContent = formData.get('content');
      
      // Очистить форму (необязательно)
      this.reset();
      
      // Сообщение об успешном сохранении (для демонстрации)
      alert('Сохранено успешно!');
    }
  });
  