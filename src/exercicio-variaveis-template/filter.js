const products = [
    { name: 'Notebook', price: 2500 },
    { name: 'Smartphone', price: 1500 },
    { name: 'Tablet', price: 1000 },
    { name: 'Monitor', price: 800 },
    { name: 'Teclado', price: 200 }
]

const expensiveProducts = products.filter(products => products.price > 500);
console.log(expensiveProducts);
