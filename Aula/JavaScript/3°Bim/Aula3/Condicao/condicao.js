/* ===== CONDIÇÕES ===== */

/* ===== IF & ELSE ===== */
var saudacao
var tempo = new Date().getHours()
if (tempo <= 12) {
    saudacao = 'Bom dia!'
} else if (tempo < 18) {
    saudacao = 'Boa Tarde!'
} else {
    saudacao = 'Boa Noite!'
}
console.log('Saudação: ' + saudacao)

/* ===== SWITCH ===== */
let dia
switch (new Date().getDay()) {
    case 0:
        dia = 'Domingo'
        break
    case 1:
        dia = 'Segunda'
        break
    case 2:
        dia = 'Terça'
        break
    case 3:
        dia = 'Quarta'
        break
    case 4:
        dia = 'Quinta'
        break
    case 5:
        dia = 'Sexta'
        break
    case 6:
        dia = 'Sábado'
    default:
        dia = 'Dia errado'
}
console.log('Dia da Semana: ' + dia)