const prompt = require('prompt-sync')();

    const numero = Number(prompt('Digite um numero: '));

    if(numero%2==0){
        const raizDoNumero = Math.sqrt(numero,2)
            console.log(`\n\tO numero é Par e sua raiz é: ${raizDoNumero}`)
    }
        else{
            const numeroAoQuadrado = Math.pow(numero, 2)
                console.log(`\n\tO numero é Impar e seu quadrado é: ${numeroAoQuadrado}`)
        }