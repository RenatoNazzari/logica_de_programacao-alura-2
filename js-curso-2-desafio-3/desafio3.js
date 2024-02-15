//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
let pesoPessoa = 83;
let alturaPessoa = 1.83;
calculoImc(pesoPessoa, alturaPessoa);
function calculoImc(p, a) {
    let resultado = p / (a * a);
    console.log(`\nSeu IMC = ${resultado.toFixed(2)}\n`);
}


//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let n = 6;
let resultadoFatorial = calculaFatorial(n);
console.log(`Fatorial de ${n} é ${resultadoFatorial}\n`);

function calculaFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let fatorial = 1;
    let i = 2;
    while (i <= n) {
        fatorial = i * fatorial;
        i++;
    }
    return fatorial;
};

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let valorDolar = 8;
let valorConvertido = converteDolarEmReal(valorDolar);
console.log(`Resultado da conversão para real = ${valorConvertido}\n`);
function converteDolarEmReal(valor) {
    let cotacaoDolar = 4.80;
    let valorConvertido = cotacaoDolar * valor;
    return valorConvertido.toFixed(2);
}


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
let alturaRetangulo = 2;
let larguraRetangulo = 8;
let resultadoRetangulo = calculaAreaEPerimetroDoRetangulo(larguraRetangulo, alturaRetangulo);
console.log(`Uma sala de ${alturaRetangulo} metros de altura por ${larguraRetangulo} metros de largura possui área = ${listaResultado[0]} metros quadrados e perímetro = ${listaResultado[1]} metros.\n`);

function calculaAreaEPerimetroDoRetangulo(b, h) {
    let areaRetangulo = b * h;
    let perimetroRetangulo = 2 * (b + h);
    return listaResultado = [areaRetangulo, perimetroRetangulo];
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let raio = 5;
let resultadoCirculo = calculaAreaEPerimetroCirculo(raio);
console.log(`Um círculo de raio = ${raio} possui uma área = ${listaResultadoCirculo[0]} e perímetro = ${listaResultadoCirculo[1]}.\n`);

function calculaAreaEPerimetroCirculo(r) {
    let pi = 3.14;
    let areaCirculo = pi * r * r;
    let perimetroCirculo = 2 * pi * r;
    return listaResultadoCirculo = [areaCirculo.toFixed(2), perimetroCirculo.toFixed(2)];
}

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
let fator1 = 2;
let imprimeTabuada = calculaTabuada(fator1);
function calculaTabuada(fator) {
    fator2 = 0;
    console.log(`Tabuada de ${fator}:`);
    while (fator2 <= 10) {
        let resultadoTabuada = fator * fator2;
        console.log(`${fator} x ${fator2} = ${resultadoTabuada}`);
        fator2++;
    }
    console.log(`\n`);
}
