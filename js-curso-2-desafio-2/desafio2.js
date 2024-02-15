// Criar uma função que exibe "Olá, mundo!" no console.
function primeiroComprimento() {
    console.log('Olá, mundo!')
}

primeiroComprimento();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
let nome = 'Renato';
let comprimento = exibeNome(nome);
function exibeNome(nome) {
    console.log(`Olá, ${nome}`)
}

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let valor = 3;
let resultado1 = dobraValor(valor);
function dobraValor(valor) {
    console.log(`O dobro de ${valor} = ` + (valor * 2));
}

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

let valor1 = 5;
let valor2 = 9;
let valor3 = 2;
let media = calculaMedia(valor1, valor2, valor3);
function calculaMedia(valor1, valor2, valor3) {
    resultadoMedia = (valor1 + valor2 + valor3) / 3;
    console.log(`A média entre os números ${valor1}, ${valor2}, ${valor3} é ${resultadoMedia}`);
}

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

let numero1 = 5;
let numero2 = 0;
let maiorNumero = apresentaMaiorNumero(numero1, numero2);
function apresentaMaiorNumero(number1, number2) {
    if (number1 > number2) {
        console.log(`Entre os números ${number1} e ${number2} o maior número é o ${number1}.`);
    } else {
        console.log(`Entre os números ${number1} e ${number2} o maior número é o ${number2}.`);
    }
};

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

let valor4 = 9;
let raiz = raizQuadrada(valor4);
function raizQuadrada(valor) {
    let resultadoRaiz = valor * valor;
    console.log(`A raiz quadrada de ${valor} é ${resultadoRaiz}.`);
};



