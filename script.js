const figures = document.querySelectorAll('.galeria-imagens figure');
figures.forEach(figure => {
  figure.addEventListener('click', () => {
    let existingBalloon = figure.querySelector('.balao-curso');
    if (existingBalloon) {
      existingBalloon.remove();
      return;
    }

    document.querySelectorAll('.balao-curso').forEach(b => b.remove());

    const info = figure.getAttribute('data-info');
    const balloon = document.createElement('div');
    balloon.className = 'balao-curso';
    balloon.textContent = info;
    figure.appendChild(balloon);
  });
});