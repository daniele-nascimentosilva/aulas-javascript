/*
A sintaxe do 'for' tem 3 partes:

1. **inicializador**: Executado uma vez no início do loop. Geralmente usado para declarar e inicializar a variável de controle do loop.
2. **condição**: Avaliada antes de cada iteração do loop. Se for verdadeira, o loop continua; se for falsa, o loop termina.
3. **incrementador**: Executado no final de cada iteração do loop. Geralmente usado para atualizar a variável de controle do loop.

for(inicializador; condição; incrementador) 
*/

for(let i = 0; i <= 5; i++) {
    console.log(`Incrementando a variável i para: ${i}`);
}