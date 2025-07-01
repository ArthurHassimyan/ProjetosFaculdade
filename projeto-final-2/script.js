function iniciarJogo() {
    let num1 = parseInt(prompt("Digite o primeiro numero inteiro"))
    let num2 = parseInt(prompt("Digite o segundo numero inteiro"))
    let total = num1 + num2
    alert("Valor da soma " + total)
}

function iniciarJogo2() {
    let secreto = 5;
    let chute = 0;
    let total = 0;
    let tentativa = 0;

    while (chute != secreto) {
        chute = parseInt(prompt("Escolha um número entre 1 e 10"))
        total = total + chute;
        tentativa++;

        if (chute == secreto) {
            alert(`Acertou Media é ${total / tentativa}`)

        } else if (chute > secreto) {
            alert(`O número secreto é menor que ${chute}. Tente novamente.`)
        } else {
            alert(`O número secreto é maior que ${chute}. Tente novamente.`)
        }
    }
}

function iniciarJogo3() {
    let secreto = 6;
    let chute = 0;
    let tentativa = 0;

    while (chute != secreto) {
        chute = parseInt(prompt("Escolha um número entre 1 e 10"))
        tentativa++;

        if (chute == secreto) {
            alert(`O total de tentativas é ${tentativa}`)

        } else if (chute > secreto) {
            alert(`O número secreto é menor que ${chute}. Tente novamente.`)
        } else {
            alert(`O número secreto é maior que ${chute}. Tente novamente.`)
        }
    }
}