const prompt = require('prompt-sync')();

    const numero1 = Number(prompt('Digite o primeiro numero: '));
    const numero2 = Number(prompt('Digite o segundo numero: '));
    const numero3 = Number(prompt('Digite o terceiro numero: '));

        if(numero1>=numero2 && numero1>=numero2){
            console.log(`\nO maior numero é ${numero1}`)
        }
            if(numero3>=numero1 && numero3>=numero2){
                console.log(`\nO maior numero é ${numero3}`)
            }
                if(numero2>=numero1 && numero2>=numero3){
                    console.log(`\nO maior numero é ${numero2}`)
                }