// tipos primitivos

// string - texto
const nome = "João";

// number
const idade = 30;
const pi = 3.14;

// boolean
const isEstudante = true;

if (isEstudante) {
    console.log(`${nome} é um estudante.`);
} else {
    console.log(`${nome} não é um estudante.`);
}

// null
const endereco = null; // ausência de valor
let valorNulo = null;
console.log(valorNulo);

// undefined - não definido. Qunando uma variável é declarada, mas não inicializada, ou não definido o valor dela.