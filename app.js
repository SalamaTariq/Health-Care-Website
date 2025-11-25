 document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('[data-collapse-toggle]');
    const menu = document.getElementById(toggleBtn.getAttribute('data-collapse-toggle'));

    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  });