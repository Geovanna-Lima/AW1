/* ===== ARRAYS ===== */
//Um array de números 
var num = [1, 2, 3, 4, 5, 6]

//Um array com vários tipos de elementos
var array = [1, true, null, 'texto']

/* ===== FOREACH ===== */
console.log('Valores do array: ')
array.forEach(array => console.log(array))

/* ===== MAP ===== */
let double = num.map(num => num * 2)
console.log('Dobrar os valores do array: ' + double)

/* ===== FILTER ===== */
let filter = num.filter(num => num % 2 === 0)
console.log('Filtrar o array em números pares: ' + filter)

/* ===== FIND ===== */
//Exemplo 1
let find = num.find(num => num === 2)
console.log('Exibir valor da condição "num === 2": ' + find)

//Exemplo 2
let students = [
    {
        nome: 'Geovanna',
        idade: '18'
    },
    {
        nome: 'Marcelo',
        idade: '20'
    }
]

var student = students.find(student => (student.nome = 'Geovanna'))

console.log('Informações do estudante "Geovanna": ', student)

/* ===== REDUCE ===== */
//Exemplo 1
let reduce = num.reduce(
    (previousValue, currentValue) => previousValue + currentValue
)
console.log('Soma dos valores do Array: ' + reduce)

//Exemplo 2
let reduceFilter = num
    .filter(e => e % 2 == 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue)
console.log('Soma dos valores pares do Array: ' + reduceFilter)