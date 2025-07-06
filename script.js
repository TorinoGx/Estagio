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
const ctaBtn = document.getElementById('cta-btn');

ctaBtn.addEventListener('click', () => {
  const existing = document.querySelector('.balao-saiba');
  if (existing) {
    existing.remove();
    return;
  }

  const balloon = document.createElement('div');
  balloon.className = 'balao-saiba';
  balloon.innerHTML = `
    <strong>📘 Word:</strong> Aprenda a criar, editar e formatar documentos, trabalhar com tabelas e listas, usar recursos gráficos e controlar alterações e revisões.<br><br>
    <strong>📊 Excel:</strong> Desenvolva planilhas com números, textos e fórmulas para cálculos, organização de dados, controle financeiro e análise de desempenho.<br><br>
    <strong>📽️ PowerPoint:</strong> Estruture apresentações com layouts, formate textos, aplique estilos, alinhe elementos e organize o conteúdo de forma clara.
  `;

  ctaBtn.parentElement.appendChild(balloon);
});