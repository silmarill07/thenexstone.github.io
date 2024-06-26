// JavaScript для сохранения изменений в административной панели
document.getElementById('saveChangesBtn').addEventListener('click', function() {
    saveChanges();
});

function saveChanges() {
    const editableContent = document.querySelector('.editable');
    const editedText = editableContent.innerHTML;

    // Пример сохранения изменений (здесь показано сообщение об успешном сохранении)
    alert('Изменения успешно сохранены!');
}

// JavaScript для загрузки изображений в административной панели
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Пример загрузки изображения (здесь показано сообщение об успешной загрузке)
    alert('Изображение успешно загружено!');
});
