document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function() {
    const submenu = item.querySelector('.submenu');
    
    // Toggle visibility of the submenu if it exists
    if (submenu) {
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
  });
});
