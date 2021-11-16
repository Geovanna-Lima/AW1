const btn = document.querySelector('[type="button"]')
const inputCEP = document.querySelector('[name="cep"]')
const inputBairro = document.querySelector('[name="bairro"]')
const inputCity = document.querySelector('[name="city"]')
const inputUf = document.querySelector('[name="uf"]')

btn.addEventListener('click', event => {
    /* let cep = event.target.value */
    let cep = inputCEP.value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resp => resp.json())
        .then(dadosCEP => {
            inputBairro.value = dadosCEP.bairro
            inputCity.value = dadosCEP.localidade
            inputUf.value = dadosCEP.uf
        })
        .catch(reject => console.log(reject))
})
