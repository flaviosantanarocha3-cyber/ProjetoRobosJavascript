
// ==========================================
// 1. CAPTURA DOS ELEMENTOS DO HTML
// ==========================================
// Seleciona os botões e a imagem do robô através dos IDs definidos no HTML
const turnOn = document.getElementById(`turnOn`);   // Botão de ligar
const turnOff = document.getElementById(`turnOff`); // Botão de desligar
const reset = document.getElementById(`reset`);     // Botão de reset
const robo = document.getElementById(`robo`);       // A tag <img> do robô

// Array com todas as imagens de "ligado" - permite ciclar entre elas
const imagensLigado = [
    
    {imagem:"./image/ligado1.jpg", classe: "animacao-neon"},

    {imagem:"./image/ligado2.png", classe: "animacao-brilho-forte"},

    {imagem:"./image/ligado3.png", classe: "animacao-pulsar"},

    {imagem:"./image/ligado4.png", classe: "animacao-flicker"},

    {imagem:"./image/ligado5.jpeg", classe: "animacao-suave"},
];

// Contador para rastrear qual imagem de "ligado" está sendo usada
let indiceAtual = 0;
let roboBrokenState = false;

// Inicializa o botão reset como desabilitado (robô começa não quebrado)
reset.disabled = true;

// ==========================================
// 2. FUNÇÕES DE VERIFICAÇÃO E AÇÃO
// ==========================================

/**
 * Gerencia o estado dos botões de controle.
 * @param {boolean} isBroken - Se true, desabilita ligar/desligar e habilita reset. Se false, o oposto.
 */
function updateButtonState(isBroken) {
    turnOn.disabled = isBroken;
    turnOff.disabled = isBroken;
    reset.disabled = !isBroken;
}

/**
 * Reseta o estado visual do robô para desligado.
 */
function resetRoboVisual() {
    robo.src = `./image/desligado.png`;
    robo.className = '';
}

/**
 * Liga o robô mudando a imagem para uma das variações de "ligado".
 * Usa o array imagensLigado e o indiceAtual para ciclar pelas imagens.
 * A condição garante que o robô só vai ligar se ele NÃO estiver quebrado (!).
 * Após ligar, incrementa o índice e usa o operador módulo (%) para voltar ao 0 quando chegar ao fim.
 */
function roboOn () {
    if (! roboBrokenState) {
        const objetoAtual = imagensLigado[indiceAtual];
        robo.src = objetoAtual.imagem;
        robo.classList.add(objetoAtual.classe);
        indiceAtual = (indiceAtual + 1) % imagensLigado.length;
    }
}

/**
 * Desliga o robô mudando a imagem para "desligado.png".
 * Também possui a trava de segurança: só desliga se NÃO estiver quebrado.
 */
function roboOff () {
    if (! roboBrokenState) {
        resetRoboVisual();
    }
}

/**
 * Quebra o robô definitivamente mudando o arquivo de imagem.
 * Como não há travas aqui, essa ação substitui qualquer estado anterior.
 */
function roboBroken () {
    roboBrokenState = true;
    resetRoboVisual();
    updateButtonState(true);
    setTimeout(() => {
        robo.src = "./image/quebrado.png";
    }, 300); // espera 300 ms (0,3 segundo)
}

/**
 * Reseta o robô para o estado original (desligado e não quebrado).
 * Restaura a imagem de desligado, limpa classes e habilita os botões.
 */
function roboReset() {
    roboBrokenState = false;
    indiceAtual = 0;
    resetRoboVisual();
    updateButtonState(false);
}

// ==========================================
// 3. ESCUTADORES DE EVENTOS (LISTENERS)
// ==========================================

// Quando o usuário CLICAR no botão "Ligar", executa a função roboOn
turnOn.addEventListener (`click`, roboOn);
// Quando o usuário CLICAR no botão "Desligar", executa a função roboOff
turnOff.addEventListener(`click`, roboOff);
// Quando o usuário CLICAR no botão "Reset", executa a função roboReset
reset.addEventListener(`click`, roboReset);
// CLIQUE DUPLO:
// Se o usuário der um DUPLO CLIQUE em cima do robô, ele quebra
robo.addEventListener (`dblclick`, roboBroken);