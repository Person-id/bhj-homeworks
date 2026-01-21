document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const valueEl = dropdown.querySelector('.dropdown__value');
    const listEl = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__item');

    valueEl.addEventListener('click', function() {
      listEl.classList.toggle('dropdown__list_active');
    });

    items.forEach(item => {
      const link = item.querySelector('.dropdown__link');

      link.addEventListener('click', function(e) {
        e.preventDefault(); 

        const selectedText = link.textContent.trim();

        valueEl.textContent = selectedText;

        listEl.classList.remove('dropdown__list_active');
      });
    });

    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) {
        listEl.classList.remove('dropdown__list_active');
      }
    });
  });
});