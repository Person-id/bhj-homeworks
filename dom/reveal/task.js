document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
  
function isElementInView(element) {
  const rect = element.getBoundingClientRect();

 return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function onScroll() {
  reveals.forEach(element => {
    if (isElementInView(element)) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', onScroll);

});
