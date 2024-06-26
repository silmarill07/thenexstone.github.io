// JavaScript для проверки адреса страницы и открытия административной панели

document.addEventListener('DOMContentLoaded', function() {
    // Проверяем текущий URL страницы
    const url = window.location.pathname;
    
    // Если URL оканчивается на '/admin', показываем административную панель
    if (url.endsWith('/admin')) {
        showAdminPanel();
    }
});

function showAdminPanel() {
    const adminPanel = document.querySelector('.admin-panel');
    if (adminPanel) {
        adminPanel.style.display = 'block'; // Показываем панель
    }
}

// Дополнительные функции для работы с административной панелью (например, сохранение изменений)

document.getElementById('saveChangesBtn').addEventListener('click', function() {
    saveChanges();
});

function saveChanges() {
    const editableContent = document.querySelector('.editable');
    const editedText = editableContent.innerHTML;

    // Пример сохранения изменений (здесь показано сообщение об успешном сохранении)
    alert('Изменения успешно сохранены!');
}

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Пример загрузки изображения (здесь показано сообщение об успешной загрузке)
    alert('Изображение успешно загружено!');
});
