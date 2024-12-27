teste = [0,0,0,4,4,4,-3,-3,-3]
plusMinus(teste)


function plusMinus(arr) {
    let contaPositiva = 0
    let negativaConta = 0
    let contaZero = 0
    const totalConta = arr.length
    for (let i = 0; i < totalConta; i++) {
        switch (arr) {
            case arr[i] > 0:
                contaPositiva++
                break
            case arr[i] < 0:
                negativaConta++
                break
            default:
                contaZero++
        }      
    }
    const porcentagemPositiva = parseFloat(contaPositiva / totalConta).toFixed(6)
    const porcentagemNegativa = parseFloat(negativaConta / totalConta).toFixed(6)
    const porcentagemZero = parseFloat(contaZero / totalConta).toFixed(6)

    console.log(porcentagemPositiva)
    console.log(porcentagemNegativa)
    console.log(porcentagemZero)
}