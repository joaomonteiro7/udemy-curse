function novoElemento(tagName, className) {
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}

function barreira(reversa = false) {
  this.elemento = novoElemento("div", "barreira");

  const borda = novoElemento("div", "borda");
  const corpo = novoElemento("div", "corpo");
  this.elemento.appendChild(reversa ? corpo : borda);
  this.elemento.appendChild(reversa ? borda : corpo);

  this.setAltura = (altura) => (corpo.style.height = `${altura}px`);
}

function parBarreiras(altura, abertura, x) {
  this.elemento = novoElemento("div", "par-de-barreiras");

  this.superior = new barreira(true);
  this.inferior = new barreira(false);

  this.elemento.appendChild(this.superior.elemento);
  this.elemento.appendChild(this.inferior.elemento);

  this.sortearAbertura = () => {
    const alturaSuperior = Math.random() * (altura - abertura);
    const alturaInferior = altura - abertura - alturaSuperior;
    this.superior.setAltura(alturaSuperior);
    this.inferior.setAltura(alturaInferior);
  };

  this.getX = () => parseInt(this.elemento.style.left.split("px")[0]);
  this.setX = (x) => (this.elemento.style.left = `${x}px`);
  this.getLargura = () => this.elemento.clientWidth;

  this.sortearAbertura();
  this.setX(x);
}

function barreiras(altura, largura, abertura, espaco, notificarPonto) {
  this.pares = [
    new parBarreiras(altura, abertura, largura),
    new parBarreiras(altura, abertura, largura + espaco),
    new parBarreiras(altura, abertura, largura + espaco * 2),
    new parBarreiras(altura, abertura, largura + espaco * 3),
  ];

  const deslocamento = 3;
  this.animar = () => {
    this.pares.forEach((par) => {
      par.setX(par.getX() - deslocamento);

      /* quando o elementos sair da area do jogo */
      if (par.getX() < -par.getLargura()) {
        par.setX(par.getX() + espaco * this.pares.length);
        par.sortearAbertura();
      }

      const meio = largura / 2;
      const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio;
      if (cruzouMeio) notificarPonto;
    });
  };
}

function passaro(alturaJogo) {
  let voando = false;

  this.elemento = novoElemento("img", "passaro");
  this.elemento.src = "imgs/passaro.png";

  this.getY = () => parseInt(this.elemento.style.bottom.split("px")[0]);
  this.setY = (y) => (this.elemento.style.bottom = `${y}px`);

  window.onkeydown = (e) => (voando = true);
  window.onkeyup = (e) => (voando = false);

  this.animar = () => {
    const novoY = this.getY() + (voando ? 8 : -5);
    const alturaMaxima = alturaJogo - this.elemento.clientHeight;

    if (novoY <= 0) {
      this.setY(0);
    } else if (novoY >= alturaMaxima) {
      this.setY(alturaMaxima);
    } else {
      this.setY(novoY);
    }
  };

  this.setY(alturaJogo / 2);
}

function progresso() {
  this.elemento = novoElemento("span", "progresso");
  this.atualizarPontos = (pontos) => {
    this.elemento.innerHTML = pontos;
  };
  this.atualizarPontos(0);
}

function estaoSobrepostos(elementoA, elementoB) {
  const a = elementoA.getBoundingClientRect();
  const b = elementoB.getBoundingClientRect();

  const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;
  const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;
  return horizontal && vertical;
}

function colidiu(passaro, barreiras) {
  let colidiu = false;
  barreiras.pares.forEach((parBarreiras) => {
    if (!colidiu) {
      const superior = parBarreiras.superior.elemento;
      const inferior = parBarreiras.inferior.elemento;
      colidiu =
        estaoSobrepostos(passaro.elemento, superior) ||
        estaoSobrepostos(passaro.elemento, inferior);
    }
  });
  return colidiu;
}

function flappyBird() {
  let pontos = 0;
  const areaDoJogo = document.querySelector("[wm-flappy]");
  const altura = areaDoJogo.clientHeight;
  const largura = areaDoJogo.clientWidth;
  const barreirasJogo = new barreiras(700, 1200, 200, 400, () =>
    progressoJogo.atualizarPontos(++pontos),
  );
  const passaroJogo = new passaro(700);
  const progressoJogo = new progresso();

  areaDoJogo.appendChild(progressoJogo.elemento);
  areaDoJogo.appendChild(passaroJogo.elemento);
  barreirasJogo.pares.forEach((par) => areaDoJogo.appendChild(par.elemento));

  this.start = () => {
    /* loop jogo */
    const temporizador = setInterval(() => {
      barreirasJogo.animar();
      passaroJogo.animar();

      if (colidiu(passaroJogo, barreirasJogo)) {
        clearInterval(temporizador);
      }
    }, 20);
  };
}

/* const barras = new barreiras(700, 1200, 200, 400);
const passaroJogo = new passaro(700);
const areaJogo = document.querySelector("[wm-flappy]");

areaJogo.appendChild(passaroJogo.elemento);

barras.pares.forEach((par) => areaJogo.appendChild(par.elemento));
setInterval(() => {
  barras.animar();
  passaroJogo.animar();
}, 20); */

new flappyBird().start();
