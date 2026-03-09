const numbers = [1, 2, 3, 4, 5]

// com o spread operator, podemos criar um novo array a partir de um array existente, sem modificar o array original. Ele é representado por três pontos (...), e é usado para "espalhar" os elementos de um array em um novo array. Também podemos concatenar dois ou mais arrays usando o spread operator, por exemplo:
const newNumbers = [...numbers, 6, 7, 8]

console.log(newNumbers);
