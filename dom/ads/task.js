document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    
    let currentIndex = cases.findIndex(caseEl => 
      caseEl.classList.contains('rotator__case_active')
    );
    
    if (currentIndex === -1) currentIndex = 0;

    function rotate() {
      cases[currentIndex].classList.remove('rotator__case_active');
      
      currentIndex = (currentIndex + 1) % cases.length;
      
      cases[currentIndex].classList.add('rotator__case_active');
    }

    setInterval(rotate, 1000);

    if (!cases[currentIndex].classList.contains('rotator__case_active')) {
      rotate();
    }
  });
});
