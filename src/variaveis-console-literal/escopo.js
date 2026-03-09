//global -  podemos usar as variaveis em qualquer lugar do codigo 
let idade = 45


//local -  so podemos usar as variaveis dentro do bloco onde foram definidas
function mostrarIdade() {
    let nome = 'João'
    console.log(nome)
    console.log(idade)

    //bloco - tudo dentro das chaves {}, variáveis ficam reservadas ao bloco onnde foram criadas
    if (idade > 18) {
        let podeDirigir = true
        console.log(podeDirigir)
        console.log('Maior de Idade')
    } else {
        console.log('Menor de Idade')
    }


}

