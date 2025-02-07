let RandomList = [];
let NumMax = 200;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.3});
}
function exibirmsg1() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${NumMax}`);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!');
        let MsgTentativas = tentativas > 1?'tentativas':'tentativa'
        exibirTextoNaTela('p', `Você acertou com ${tentativas} ${MsgTentativas}`);
        document.querySelector('button#reiniciar').disabled = false;
        document.querySelector('button#chutar').disabled = true;
        
    } else if (chute.length == 0 || chute == 0) {
        exibirTextoNaTela('p',`O chute deve ser um número entre 1 e ${NumMax}`)
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p',`O número secreto é menor que ${chute}`);
    } else if (chute < numeroSecreto) {
        exibirTextoNaTela('p',`O número secreto é maior que ${chute}`);
    }
    limparcampo() 
    tentativas++
} 
      
function gerarNumeroAleatorio() {
    let NumEscolhido = parseInt(Math.random() * NumMax + 1);
    let ElementsInList = RandomList.length;

    if (ElementsInList == NumMax) {
        RandomList = []
    }

    if (RandomList.includes(NumEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        RandomList.push(NumEscolhido);
        console.log(RandomList)
        return NumEscolhido;
    }
}    

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarjogo() {
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    exibirmsg1()
    limparcampo()
    NumMax
    document.querySelector('button#reiniciar').disabled = true;
    document.querySelector('button#chutar').disabled = false;
}  