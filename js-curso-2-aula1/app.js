let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = geraNumeroAleatorio();
let numeroTentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

exibirMensagemInicial();

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);

}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = numeroTentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto em ${numeroTentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        numeroTentativas = 1;
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNaTela('h1', 'Número errado tente novamente!');
        if (chute > numeroSecreto) {
            let mensagemMenor = `O número secreto é menor que ${chute}`
            exibirTextoNaTela('p', mensagemMenor);
        } else {
            let mensagemMaior = `O número secreto é maior que ${chute}`
            exibirTextoNaTela('p', mensagemMaior);
        };
        numeroTentativas++;
        limparCampo();
    }
}

function geraNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return geraNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}



