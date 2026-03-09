const numbers = [1, 2, 3, 4, 5]
const doubleNumbers = numbers.map((number, index) => {
    console.log(index);
    
    return number *2
});
console.log(numbers);
console.log(doubleNumbers);
