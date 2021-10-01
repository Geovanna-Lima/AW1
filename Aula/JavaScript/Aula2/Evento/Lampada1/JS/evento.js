function mudaLamp(tipo) {
    tipo == 1 ? (arquivo = '../IMG/acesa.jpg') :
        tipo == 2 ? (arquivo = '../IMG/apagada.jpg') :
            tipo == 3 ? (arquivo = '../IMG/quebrada.jpg') : (arquivo = '')

    document.getElementById('luz').src = arquivo
}