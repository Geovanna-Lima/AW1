var quebrada = false
var arquivo

document.getElementById('luz').onmousemove = () => {
    if (!quebrada) document.getElementById('luz').src = '../IMG/acesa.jpg'
}
document.getElementById('luz').onmouseleave = () => {
    if (!quebrada) document.getElementById('luz').src = '../IMG/apagada.jpg'
}
document.getElementById('luz').onclick = () => {
    if (!quebrada) document.getElementById('luz').src = '../IMG/quebrada.jpg'
    quebrada = true
}