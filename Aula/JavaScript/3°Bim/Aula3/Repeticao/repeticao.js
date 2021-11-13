/* ===== REPETIÇÕES ===== */

/* ===== DO WHILE ===== */
var i = 0
do {
    i += 1
    console.log(i)
} while (i < 5)

/* ===== WHILE ===== */
var i = 0
while (i < 5) {
    i += 1
    console.log(i)
}

/* ===== FOR ===== */
for (var passo = 1; passo <= 5; passo++) {
    console.log(`${passo} `)
}

/* ===== FOR...IN ===== */
//usado em objetos
var obj = { a: 1, b: 2, c: 3 }
for (var prop in obj) {
    console.log('obj.' + prop + ' = ' + obj[prop])
}

/* ===== FOR...OF ===== */
//usado em números
let arr = [3, 5, 7]

for (let i of arr) {
    console.log(i)
}