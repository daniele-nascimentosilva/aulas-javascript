// tipos promitivos - booleanos, string, number, double, float

// booleanos
const isTrue = true;
const isFalse = false;
const isAssociated = false;

if (isAssociated) {
    // console.log("Essa pessoa é associada");
} else {
    // console.log("Essa pessoa não é associada");
    
}

//quando eu uso chaves eu declaro um obejeto e um objeto pode ter vários atributos, por exemplo, nome, idade, cidade, etc.
const pessoa = { nome: "Daniele", idade: 42, Cidade: "Limeira"}
// console.log("O nome dessa pessoa é:", pessoa.nome);
// console.log("A idade da pessoa é:", pessoa.idade);
// console.log("O sexo da pessoa é:", pessoa.sexo); //undefined, porque não existe o atributo sexo no objeto pessoa


//exercicio

const nome = "Maria"
const isWoman = true;
const idade = 67
const certificado = null
const profissao = undefined

console.log("O nome da pessoa é:", nome);
console.log("A pessoa é:", isWoman ? "mulher" : "homem");
console.log("A idade da pessoa é:", idade);
console.log("A pessoa tem certificado:", certificado);
console.log("A profissão da pessoa é:", profissao);




