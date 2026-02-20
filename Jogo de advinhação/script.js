//Jogo de advinhação de números positivos!

function main (){
    //Variaveis gerais:
    let contadorTentativas = 0
    let numerosTentados = []
    let numeroSecreto = Number(Math.floor((Math.random()*100)))
    //iniciando o programa
    console.log("Seja bem vindo ao Jogo de Adivinhação de números positivos!")

    //Laço de repetição para armazenar e verificar as tentativas do usuario.
    while(true){//Quando ele acertar o laço se encerra

        let tentativaUsuario = Number(prompt("Digite um número de 1 a 100 ou digite -1 para sair: "))

        //Condições:
        if(tentativaUsuario == -1){//Encerra o programa
            alert("Programa encerrado")
            break
        }

        else if(tentativaUsuario < numeroSecreto){//verificando se o número escolhido pelo usuario
        //é menor que o número escolhido pelo sistema
            alert("O numero que você escolheu é menor que o numero correto.")//Avisa para o usuario
            numerosTentados.push(tentativaUsuario)//Adiciona os números em uma lista
        }
        else if(tentativaUsuario > numeroSecreto){//Verifica se o número que o usuario escolheu é maior que o
            //número que o sistema escolheu
            alert("O numero que você escolheu é maior que o numero correto.")
            numerosTentados.push(tentativaUsuario)

        }
        else if(tentativaUsuario == numeroSecreto){//Verifica se o usuario acertou o número que o sistema escolheu
            alert("Parabens!!!")
            alert(`O número secreto era ${numeroSecreto}`)
            
            break
        }
        //Contador + exibições de tentativas
        contadorTentativas++ //Add mais um ao contador de tentativas

        console.log("Você tentou: ",contadorTentativas," vezes.")
        console.log("Os números já escritos são: ",numerosTentados)

    }
}
main()