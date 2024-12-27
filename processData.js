const input1 = 'S;M;camelCaseMethod()';
const input2 = 'C;C;example class name'
const input3 = 'C;V;variable name example'

console.log(processData(input1))
console.log(processData(input2))
console.log(processData(input3))

function processData(input) {
    const [operacao, tipo, palavra] = input.split(';')
    
    if (operacao === "S") {
        return dividePalavras(tipo, palavra)
    } else if (operacao === "C") {
        return combinaPalavras(tipo, palavra)
    } else {
        throw new Error('Operação invalida!!!')
    }
  
    function dividePalavras(tipo, palavras) {
        if (tipo === "M") {
            palavras = palavras.replace('()', '')
        }
        
        const resultado = palavras.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()
        return resultado
    }
    
    function combinaPalavras(tipo, palavras) {
        const arrayPalavras = palavras.split(' ')
        
        let resultado = ''
        
        if (tipo === "M")  {
            resultado = arrayPalavras.map((palavra,index) => {
                if (index === 0) {
                    return palavra
                } return palavra.toUpperCase() + palavra.slice(1)
            }).join('') + '()'
        } else if (tipo === "C") {
            resultado = arrayPalavras.map(palavra => palavra.toUpperCase() + palavra.slice(1)).join('')
        } else if (tipo === "V") {
            resultado = arrayPalavras.map((palavra, index) => {
                if (index === 0) {
                    return palavra
                }
                
                return palavra.toUpperCase() + palavra.slice(1)
            }).join('') 
        }
        return resultado
    }
    
    
}
