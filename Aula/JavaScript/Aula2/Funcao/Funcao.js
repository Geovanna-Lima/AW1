/* ===== FUNÇÕES ===== */
//estrutura básica de uma função
function nomeFunc() {
    console.log('Olá Mundo!')
}

//invocando função
nomeFunc()

/* ===== FUNÇÃO COM PARÂMETRO ===== */
function quadrada(num = 1) {
    return num * num
}

console.log(quadrada(3))

/* ===== FUNÇÃO ANÔNIMA ===== */
var mult = function (num = 2) {
    return num * num
}

console.log(mult())

/* ===== ARROW FUNCTION ===== */
// let arrow = () => console.log('Olá Mundo')
// arrow()

var arrow = (num1 = 1, num2 = 2) => {
    let soma = num1 + num2
    return soma
}

console.log(arrow(5, 5))

/* ===== MAP ===== */
var numbers = [1, 4, 9]

const result = numbers.map(function (n) {
    var result = {
        raizQuad: Math.sqrt(n),
        potencia: Math.pow(n, 2)
    }
    return result
})

console.log(result)

/* ===== SPLIT ===== */
//separa valores do array
var str = '12345'
str = str.split('')
console.log(str)

//separa cada valor de acordo com o valor do parâmetro
var str2 = '12345'
str2 = str2.split('3')
console.log(str2)

//separa cada valor e coloca ao contrário
var str3 = '12345'
str3 = str3.split('').reverse()
console.log(str3)

//separa cada valor com um "-"
var str4 = '12345'
str4 = str4.split('').join('-')
console.log(str4)

//separa cada valor com um "-" e coloca ao contrário
var str5 = '12345'
str5 = str5.split('').reverse().join('-')
console.log(str5)

//palíndromo
var palin = 'geovanna'
palin = palin.split('').reverse().join('')
console.log(palin)

/* ===== DATA ===== */
var data = new Date()

console.log('Dia: ' + data.getDate())
console.log('Mês: ' + data.getMonth())
console.log('Ano: ' + data.getFullYear())