var quebrada = false
var arquivo

document.getElementById('luz').addEventListener('mouseenter', acende)
document.getElementById('luz').addEventListener('mouseleave', () => mudaLampada(2))
document.getElementById('luz').addEventListener('click', () => mudaLampada(3))

function acende() {
    mudaLampada(1)
}

function mudaLampada(tipo) {
    if (tipo == 1) arquivo = '../IMG/acesa.jpg'
    if (tipo == 2) arquivo = '../IMG/apagada.jpg'
    if (tipo == 3) arquivo = '../IMG/quebrada.jpg'

    if (!quebrada) document.getElementById('luz').src = arquivo

    if (tipo == 3) quebrada = true
}