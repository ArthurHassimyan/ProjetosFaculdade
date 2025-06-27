let secreto = 5;
let chute = 0; 
let total = 0;
let tentativa = 0;

while(chute != secreto){
    chute = parseInt(prompt("Escolha um número entre 1 e 10"))
    total = total + chute;
    tentativa++;

    if(chute == secreto){
        alert(`Acertou Media é ${total/tentativa}`)

    }else if(chute > secreto){
        alert(`O número secreto é menor que ${chute}. Tente novamente.`)
    }else{
        alert(`O número secreto é maior que ${chute}. Tente novamente.`)
    }
}
