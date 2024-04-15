const html = document.querySelector('html');
const allBtn = document.querySelectorAll('.app__card-button');
const focusBtn = document.querySelector('.app__card-button--foco');
const shortBreakBtn = document.querySelector('.app__card-button--curto');
const longBreakBtn = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const songFocusInput = document.querySelector('#alternar-musica');
const song = new Audio('/sons/luna-rise-part-one.mp3');

song.loop = true;

songFocusInput.addEventListener('change', () => {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
});

focusBtn.addEventListener('click', () => {
  changeContext('foco');
  focusBtn.classList.add('active');
});

shortBreakBtn.addEventListener('click', () => {
  changeContext('descanso-curto');
  shortBreakBtn.classList.add('active');
});

longBreakBtn.addEventListener('click', () => {
  changeContext('descanso-longo');
  longBreakBtn.classList.add('active');
});

function changeContext(context) {
  allBtn.forEach(function (context) {
    context.classList.remove('active');
  });
  html.setAttribute('data-contexto', context);
  banner.setAttribute('src', `/imagens/${context}.png`);
  switch (context) {
    case 'foco':
      title.innerHTML = `
        Otimize sua produtividade, <br/>
        <strong class="app__title-strong">
          mergulhe no que importa.
        </strong>
      `;
      break;

    case 'descanso-curto':
      title.innerHTML = `
        Que tal dar uma respirada? <br/>
        <strong class="app__title-strong">
          Faça uma pausa curta!
        </strong>
      `;
      break;

    case 'descanso-longo':
      title.innerHTML = `
        Hora de voltar à superfície. <br/>
        <strong class="app__title-strong">
          Faça uma pausa longa.
        </strong>
      `;
      break;
  
    default:
      break;
  }
}