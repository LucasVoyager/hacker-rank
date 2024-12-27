const array = [1,2,3,4,5]
minMaxSum(array)

function minMaxSum(arr) {
    if (arr.length < 5) {
        throw new Error('Deve ser maior que 5')
    }
    arr.sort((a,b) => a - b)
    const minSoma = arr.slice(0,4).reduce((acc, val) => acc + val, 0)
    const maxSOma = arr.slice(1,5).reduce((acc, val) => acc + val, 0)

    console.log(`${minSoma} ${maxSOma}`)
}