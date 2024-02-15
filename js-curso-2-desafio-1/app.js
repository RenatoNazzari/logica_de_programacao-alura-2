let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do desafio';

function mensagemConsole() {
    console.log('O botão foi clicado');
};

function mensagemAlert() {
    alert('Eu amo JS');
};

function digitaCidade() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
};

function geraSoma() {
    let valor1 = parseInt(prompt('Informe o primeiro valor para a soma'));
    let valor2 = parseInt(prompt('Informe o segundo valor para a soma'));
    let soma = valor1 + valor2;
    alert(`${valor1} + ${valor2} = ${soma}`);
};