const modal = {
    open() {
        /* Abrir modal */
        /* Adicionar a class active no modal */
        document
            .querySelector('.modal-overlay')
            .classList.add('active')
    },
    close() {
        /* Fechar modal */
        /* remover a class active do modal */
        document
            .querySelector('.modal-overlay')
            .classList.remove('active')
    }
}