const prompt = require('prompt-sync')();

    const idade = Number(prompt('Digite sua idade: '));

        if(idade>=10 && idade<=14){
            console.log('\n\tSua categoria é Infantil')
        }
            if(idade>=15 && idade<=17){
                console.log('\n\tSua categoria é Juvenil')
            }
                if(idade>=18 && idade<=25){
                    console.log('\n\tSua categoria é Adulto')
                }
                    else{
                        console.log(`\n\tNão possui categoria`)
                    }