// && (AND) vai retornar true se ambos os operandos forem verdadeiros

// const numero1 = 5;
// const numero2 = 10;
// console.log(numero1 === numero2 && numero1 > 0); // false

// || (OR) vai retornar true se pelo menos um dos operandos for verdadeiro

// const numero1 = 5;
// const numero2 = 10;
// console.log(numero1 === numero2 || numero1 >= numero2); // true

// ! (NOT) true se o operando for falso e false se o operando for verdadeiro

const hasError = true
console.log(hasError); // true

if (hasError) {
  console.log('Ops, ocorreu um erro!');
}

console.log(!hasError); // false
if (!hasError) {
  console.log('Tudo certo!');
}