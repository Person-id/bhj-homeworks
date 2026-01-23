document.addEventListener('DOMContentLoaded', function() {
  const tabContainers = document.querySelectorAll('.tabs');

  tabContainers.forEach(container => {
    const nav = container.querySelector('.tab__navigation');
    const tabs = container.querySelectorAll('.tab');
    const contents = container.querySelectorAll('.tab__content');

    nav.addEventListener('click', function(event) {
      const target = event.target;

      if (!target.matches('.tab')) return;

      const index = Array.from(tabs).indexOf(target);

      tabs.forEach(tab => tab.classList.remove('tab_active'));
      contents.forEach(content => content.classList.remove('tab__content_active'));

      target.classList.add('tab_active');
      contents[index].classList.add('tab__content_active');
    });
  });
});
