const masks = {
    cpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    },
    phone(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
    },
    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    },
    date(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{4})\d+?$/, '$1')
    },
    number(value) {
        return value
            .replace(/\D/g, '')
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

const button = document.getElementById('enviar')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const nome = document.getElementById('idNome')
    const sobrenome = document.getElementById('idSobrenome')
    const data = document.getElementById('idData')
    const email = document.getElementById('idEmail')
    const phone = document.getElementById('idTel')
    const cpf = document.getElementById('idCpf')
    const rua = document.getElementById('idRua')
    const bairro = document.getElementById('idBairro')
    const numero = document.getElementById('idNumero')
    const cep = document.getElementById('idCep')

    /* verificar se está vazio */
    if (nome.value == '') {
        nome.classList.add("errorInput")
    } else {
        nome.classList.remove("errorInput")
    }

    if (sobrenome.value == '') {
        sobrenome.classList.add("errorInput")
    } else {
        sobrenome.classList.remove("errorInput")
    }

    if (data.value == '') {
        data.classList.add("errorInput")
    } else {
        data.classList.remove("errorInput")
    }

    if (email.value == '') {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (phone.value == '') {
        phone.classList.add("errorInput")
    } else {
        phone.classList.remove("errorInput")
    }

    if (cpf.value == '') {
        cpf.classList.add("errorInput")
    } else {
        cpf.classList.remove("errorInput")
    }

    if (rua.value == '') {
        rua.classList.add("errorInput")
    } else {
        rua.classList.remove("errorInput")
    }

    if (bairro.value == '') {
        bairro.classList.add("errorInput")
    } else {
        bairro.classList.remove("errorInput")
    }

    if (numero.value == '') {
        numero.classList.add("errorInput")
    } else {
        numero.classList.remove("errorInput")
    }

    if (cep.value == '') {
        cep.classList.add("errorInput")
    } else {
        cep.classList.remove("errorInput")
    }

    /* verificar se e-mail é valido */
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    /* verificar se cep é valido */
    if (cep.value.length <= 8) {
        cep.classList.add("errorInput")
    } else {
        cep.classList.remove("errorInput")
    }

    /* verificar se cpf é valido */
    if (cpf.value.length <= 13) {
        cpf.classList.add("errorInput")
    } else {
        cpf.classList.remove("errorInput")
    }

    /* verificar se telefone é valido */
    if ((phone.value.length <= 13)) {
        phone.classList.add("errorInput")
    } else {
        phone.classList.remove("errorInput")
    }
})