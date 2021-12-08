const btn = document.querySelector('[type="button"]')
const inputCEP = document.querySelector('[name="cep"]')
const inputRoad = document.querySelector('[name="road"]')
const inputDistrict = document.querySelector('[name="district"]')
const inputCity = document.querySelector('[name="city"]')
const inputUf = document.querySelector('[name="uf"]')

btn.addEventListener('click', event => {
    let cep = inputCEP.value
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            const dadosCEP = response.data
            if (dadosCEP.logradouro && dadosCEP.bairro && dadosCEP.localidade && dadosCEP.uf) {
                inputRoad.value = dadosCEP.logradouro
                inputDistrict.value = dadosCEP.bairro
                inputCity.value = dadosCEP.localidade
                inputUf.value = dadosCEP.uf
            }
            else {
                throw new Error();
            }
        })
        .catch(error => {
            inputRoad.value = "CEP inválido!"
            inputDistrict.value = "CEP inválido!"
            inputCity.value = "CEP inválido!"
            inputUf.value = "CEP inválido!"
        })
})

const masks = {
    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    },
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})