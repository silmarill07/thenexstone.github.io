window.onload = function() {
    let savedTitle = localStorage.getItem('title');
    let savedContent = localStorage.getItem('content');
  
    if (savedTitle) {
      document.getElementById('main-title').textContent = savedTitle;
    }
    if (savedContent) {
      document.getElementById('main-content').textContent = savedContent;
    }
  }
  