/* ===== MENU ===== */
const nav = document.querySelectorAll('.navigation')
const content = document.querySelector('.content')

function activeMenu() {
    nav.forEach((item) =>
        item.classList.toggle('show'),
    )
    content.classList.toggle('show')
}

/* ===== NAVEGAÇÃO ===== */
const list = document.querySelectorAll('.list')

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active')
    )
    this.classList.add('active')
}

list.forEach((item) =>
    item.addEventListener('click', activeLink)
)

/* ===== DISPLAY ===== */
var divMoney = document.querySelector("#convertMoney")
var divTemperature = document.querySelector("#convertTemperature")
var divMeasures = document.querySelector("#convertMeasures")
var divTime = document.querySelector("#convertTime")

var listMoney = document.querySelector(".list.money")
listMoney.addEventListener("click", function () {
    divMoney.style.display = "block"
    divTemperature.style.display = "none"
    divMeasures.style.display = "none"
    divTime.style.display = "none"
});

var listTemperature = document.querySelector(".list.temperature")
listTemperature.addEventListener("click", function () {
    divMoney.style.display = "none"
    divTemperature.style.display = "block"
    divMeasures.style.display = "none"
    divTime.style.display = "none"
});

var listMeasures = document.querySelector(".list.measures")
listMeasures.addEventListener("click", function () {
    divMoney.style.display = "none"
    divTemperature.style.display = "none"
    divMeasures.style.display = "block"
    divTime.style.display = "none"
});

var listTime = document.querySelector(".list.time")
listTime.addEventListener("click", function () {
    divMoney.style.display = "none"
    divTemperature.style.display = "none"
    divMeasures.style.display = "none"
    divTime.style.display = "block"
});

/* ===== CONVERSOR ===== */
/* Conversor de Temperatura */
function convertTemperature() {
    /* Variáveis */
    var temp = document.getElementById("temp").value
    var temp2 = document.getElementById("temp2").value

    /* Conversão */
    var valor1 = parseFloat(document.getElementById("converterTemp").value)

    /* Fahrenheit para Celsius */
    if (temp.toLowerCase() == "fahrenheit" && temp2.toLowerCase() == "celsius") {
        var valor2 = ((valor1 - 32) * 5) / 9
        var sigla = "°C"
    }
    /* Fahrenheit para Kelvin */
    else if (temp.toLowerCase() == "fahrenheit" && temp2.toLowerCase() == "kelvin") {
        var valor2 = (valor1 - 32) * 5 / 9 + 273.15
        var sigla = "°K"
    }
    /* Celcius para Fahrenheit */
    else if (temp.toLowerCase() == "celsius" && temp2.toLowerCase() == "fahrenheit") {
        var valor2 = (valor1 * 9) / 5 + 32
        var sigla = "°F"
    }
    /* Celcius para Kelvin */
    else if (temp.toLowerCase() == "celsius" && temp2.toLowerCase() == "kelvin") {
        var valor2 = (valor1 + 273.15)
        var sigla = "°K"
    }
    /* Kelvin para Fahrenheit */
    else if (temp.toLowerCase() == "kelvin" && temp2.toLowerCase() == "fahrenheit") {
        var valor2 = (valor1 - 273.15) * 9 / 5 + 32
        var sigla = "°F"
    }
    /* Kelvin para Celcius */
    else if (temp.toLowerCase() == "kelvin" && temp2.toLowerCase() == "celsius") {
        var valor2 = (valor1 - 273.15)
        var sigla = "°C"
    }

    /* Exibição */
    document.getElementById("valorFinalTemp").innerHTML = valor2.toFixed(2) + " " + sigla
    document.getElementById("tempa").innerHTML = temp
    document.getElementById("tempa2").innerHTML = temp2
    document.getElementById("converterTempa").innerHTML = valor1
}

/* Conversor de Tempo */
function convertTime() {
    /* Variáveis */
    var tempo = document.getElementById("tempo").value
    var tempo2 = document.getElementById("tempo2").value

    /* Conversão */
    var valor1 = parseFloat(document.getElementById("converterTempo").value)

    /* Hora em Minuto */
    if (tempo.toLowerCase() == "horas" && tempo2.toLowerCase() == "minutos") {
        var valor2 = valor1 * 60
        var sigla = "min"
    }
    /* Hora em Segundo */
    else if (tempo.toLowerCase() == "horas" && tempo2.toLowerCase() == "segundos") {
        var valor2 = valor1 * 3600
        var sigla = "seg"
    }
    /* Minuto em Hora */
    else if (tempo.toLowerCase() == "minutos" && tempo2.toLowerCase() == "horas") {
        var valor2 = valor1 / 60
        var sigla = "hrs"
    }
    /* Minuto em Segundo */
    else if (tempo.toLowerCase() == "minutos" && tempo2.toLowerCase() == "segundos") {
        var valor2 = valor1 * 60
        var sigla = "seg"
    }
    /* Segundo em Hora */
    else if (tempo.toLowerCase() == "segundos" && tempo2.toLowerCase() == "horas") {
        var valor2 = valor1 / 3600
        var sigla = "hrs"
    }
    /* Segundo em Minuto */
    else if (tempo.toLowerCase() == "segundos" && tempo2.toLowerCase() == "minutos") {
        var valor2 = valor1 / 60
        var sigla = "min"
    }

    /* Exibição */
    document.getElementById("valorFinalTempo").innerHTML = valor2.toFixed(2) + " " + sigla
    document.getElementById("tempoa").innerHTML = tempo
    document.getElementById("tempoa2").innerHTML = tempo2
    document.getElementById("converterTempoa").innerHTML = valor1
}

/* Conversor de Moedas */
function convertMoney() {
    /* Variáveis */
    var moeda = document.getElementById("moeda").value
    var moeda2 = document.getElementById("moeda2").value

    /* Conversão */
    var valor1 = parseFloat(document.getElementById("converterMoeda").value)

    /* Dólar em Libra */
    if (moeda.toLowerCase() == "dólar" && moeda2.toLowerCase() == "libra") {
        var valor2 = valor1 * 0.73
        var sigla = "GBP"
    }
    /* Dólar em Real */
    else if (moeda.toLowerCase() == "dólar" && moeda2.toLowerCase() == "real") {
        var valor2 = valor1 * 5.46
        var sigla = "BRL"
    }
    /* Dólar em Euro */
    else if (moeda.toLowerCase() == "dólar" && moeda2.toLowerCase() == "euro") {
        var valor2 = valor1 * 0.86
        var sigla = "EUR"
    }
    /* Libra em Dólar */
    else if (moeda.toLowerCase() == "libra" && moeda2.toLowerCase() == "dólar") {
        var valor2 = valor1 * 1.37
        var sigla = "USD"
    }
    /* Libra em Real */
    else if (moeda.toLowerCase() == "libra" && moeda2.toLowerCase() == "real") {
        var valor2 = valor1 * 7.50
        var sigla = "BRL"
    }
    /* Libra em Euro */
    else if (moeda.toLowerCase() == "libra" && moeda2.toLowerCase() == "euro") {
        var valor2 = valor1 * 1.19
        var sigla = "EUR"
    }
    /* Real em Dólar */
    else if (moeda.toLowerCase() == "real" && moeda2.toLowerCase() == "dólar") {
        var valor2 = valor1 * 0.18
        var sigla = "USD"
    }
    /* Real em Libra */
    else if (moeda.toLowerCase() == "real" && moeda2.toLowerCase() == "libra") {
        var valor2 = valor1 * 0.13
        var sigla = "GBP"
    }
    /* Real em Euro */
    else if (moeda.toLowerCase() == "real" && moeda2.toLowerCase() == "euro") {
        var valor2 = valor1 * 0.16
        var sigla = "EUR"
    }
    /* Euro em Dólar */
    else if (moeda.toLowerCase() == "euro" && moeda2.toLowerCase() == "dólar") {
        var valor2 = valor1 * 1.16
        var sigla = "USD"
    }
    /* Euro em Libra */
    else if (moeda.toLowerCase() == "euro" && moeda2.toLowerCase() == "libra") {
        var valor2 = valor1 * 0.84
        var sigla = "GBP"
    }
    /* Euro em Real*/
    else if (moeda.toLowerCase() == "euro" && moeda2.toLowerCase() == "real") {
        var valor2 = valor1 * 6.33
        var sigla = "USD"
    }

    /* Exibição */
    document.getElementById("valorFinalMoeda").innerHTML = valor2.toFixed(2) + " " + sigla
    document.getElementById("moedaa").innerHTML = moeda
    document.getElementById("moedaa2").innerHTML = moeda2
    document.getElementById("converterMoeda2").innerHTML = valor1.toFixed(2)
}

/* Conversor de Medida */
function convertMeasures() {
    /* Variáveis */
    var medida = document.getElementById("medida").value
    var medida2 = document.getElementById("medida2").value

    /* Conversão */
    var valor1 = parseFloat(document.getElementById("converterMedida").value)

    /* Quilômetro em Quilômetro  */
    if (medida.toLowerCase() == "quilômetro" && medida2.toLowerCase() == "quilômetro") {
        var valor2 = valor1 * 1
        var sigla = "km"
    }
    /* Quilômetro em Hectômetro */
    else if (medida.toLowerCase() == "quilômetro" && medida2.toLowerCase() == "hectômetro") {
        var valor2 = valor1 * 10
        var sigla = "hm"
    }
    /* Quilômetro em Decâmetro */
    else if (medida.toLowerCase() == "quilômetro" && medida2.toLowerCase() == "decâmetro") {
        var valor2 = valor1 * 100
        var sigla = "dam"
    }
    /* Quilômetro em Metro */
    else if (medida.toLowerCase() == "quilômetro" && medida2.toLowerCase() == "metro") {
        var valor2 = valor1 * 1000
        var sigla = "m"
    }
    /* Quilômetro em Decímetro */
    else if (medida.toLowerCase() == "quilômetro" && medida2.toLowerCase() == "decímetro") {
        var valor2 = valor1 * 10000
        var sigla = "dm"
    }
    /* Quilômetro em Centímetro */
    else if (medida.toLowerCase() == "quilômetro" && medida2.toLowerCase() == "centímetro") {
        var valor2 = valor1 * 100000
        var sigla = "cm"
    }
    /* Quilômetro em Milímetro */
    else if (medida.toLowerCase() == "quilômetro" && medida2.toLowerCase() == "milímetro") {
        var valor2 = valor1 * 1000000
        var sigla = "mm"
    }
    /* Hectômetro em Quilômetro */
    else if (medida.toLowerCase() == "hectômetro" && medida2.toLowerCase() == "quilômetro") {
        var valor2 = valor1 * 0.1
        var sigla = "km"
    }
    /* Hectômetro em Hectômetro */
    else if (medida.toLowerCase() == "hectômetro" && medida2.toLowerCase() == "hectômetro") {
        var valor2 = valor1 * 1
        var sigla = "hm"
    }
    /* Hectômetro em Decâmetro */
    else if (medida.toLowerCase() == "hectômetro" && medida2.toLowerCase() == "decâmetro") {
        var valor2 = valor1 * 10
        var sigla = "dam"
    }
    /* Hectômetro em Metro */
    else if (medida.toLowerCase() == "hectômetro" && medida2.toLowerCase() == "metro") {
        var valor2 = valor1 * 100
        var sigla = "m"
    }
    /* Hectômetro em Decímetro */
    else if (medida.toLowerCase() == "hectômetro" && medida2.toLowerCase() == "decímetro") {
        var valor2 = valor1 * 1000
        var sigla = "dm"
    }
    /* Hectômetro em Milímetro */
    else if (medida.toLowerCase() == "hectômetro" && medida2.toLowerCase() == "milímetro") {
        var valor2 = valor1 * 100000
        var sigla = "mm"
    }
    /* Decâmetro em Quilômetro */
    else if (medida.toLowerCase() == "decâmetro" && medida2.toLowerCase() == "quilômetro") {
        var valor2 = valor1 * 0.01
        var sigla = "km"
    }
    /* Decâmetro em Hectômetro */
    else if (medida.toLowerCase() == "decâmetro" && medida2.toLowerCase() == "hectômetro") {
        var valor2 = valor1 * 0.1
        var sigla = "hm"
    }
    /* Decâmetro em Decâmetro */
    else if (medida.toLowerCase() == "decâmetro" && medida2.toLowerCase() == "decâmetro") {
        var valor2 = valor1 * 1
        var sigla = "dam"
    }
    /* Decâmetro em Metro */
    else if (medida.toLowerCase() == "decâmetro" && medida2.toLowerCase() == "metro") {
        var valor2 = valor1 * 10
        var sigla = "m"
    }
    /* Decâmetro em Decímetro */
    else if (medida.toLowerCase() == "decâmetro" && medida2.toLowerCase() == "decímetro") {
        var valor2 = valor1 * 100
        var sigla = "dm"
    }
    /* Decâmetro em Centímetro */
    else if (medida.toLowerCase() == "decâmetro" && medida2.toLowerCase() == "centímetro") {
        var valor2 = valor1 * 1000
        var sigla = "cm"
    }
    /* Decâmetro em Milímetro */
    else if (medida.toLowerCase() == "decâmetro" && medida2.toLowerCase() == "milímetro") {
        var valor2 = valor1 * 10000
        var sigla = "mm"
    }
    /* Metro em Quilômetro */
    else if (medida.toLowerCase() == "metro" && medida2.toLowerCase() == "quilômetro") {
        var valor2 = valor1 * 0.001
        var sigla = "km"
    }
    /* Metro em Hectômetro */
    else if (medida.toLowerCase() == "metro" && medida2.toLowerCase() == "hectômetro") {
        var valor2 = valor1 * 0.01
        var sigla = "hm"
    }
    /* Metro em Decâmetro */
    else if (medida.toLowerCase() == "metro" && medida2.toLowerCase() == "decâmetro") {
        var valor2 = valor1 * 0.1
        var sigla = "dam"
    }
    /* Metro em Metro */
    else if (medida.toLowerCase() == "metro" && medida2.toLowerCase() == "metro") {
        var valor2 = valor1 * 1
        var sigla = "m"
    }
    /* Metro em Decímetro */
    else if (medida.toLowerCase() == "metro" && medida2.toLowerCase() == "decímetro") {
        var valor2 = valor1 * 10
        var sigla = "dm"
    }
    /* Metro em Centímetro */
    else if (medida.toLowerCase() == "metro" && medida2.toLowerCase() == "centímetro") {
        var valor2 = valor1 * 100
        var sigla = "cm"
    }
    /* Metro em Milímetro */
    else if (medida.toLowerCase() == "metro" && medida2.toLowerCase() == "milímetro") {
        var valor2 = valor1 * 1000
        var sigla = "mm"
    }
    /* Decímetro em Quilômetro */
    else if (medida.toLowerCase() == "decímetro" && medida2.toLowerCase() == "quilômetro") {
        var valor2 = valor1 * 0.0001
        var sigla = "km"
    }
    /* Decímetro em Hectômetro */
    else if (medida.toLowerCase() == "decímetro" && medida2.toLowerCase() == "hectômetro") {
        var valor2 = valor1 * 0.001
        var sigla = "hm"
    }
    /* Decímetro em Decâmetro */
    else if (medida.toLowerCase() == "decímetro" && medida2.toLowerCase() == "decâmetro") {
        var valor2 = valor1 * 0.01
        var sigla = "dam"
    }
    /* Decímetro em Metro */
    else if (medida.toLowerCase() == "decímetro" && medida2.toLowerCase() == "metro") {
        var valor2 = valor1 * 0.1
        var sigla = "m"
    }
    /* Decímetro em Decímetro */
    else if (medida.toLowerCase() == "decímetro" && medida2.toLowerCase() == "decímetro") {
        var valor2 = valor1 * 1
        var sigla = "dm"
    }
    /* Decímetro em Centímetro */
    else if (medida.toLowerCase() == "decímetro" && medida2.toLowerCase() == "centímetro") {
        var valor2 = valor1 * 10
        var sigla = "cm"
    }
    /* Decímetro em Milímetro */
    else if (medida.toLowerCase() == "decímetro" && medida2.toLowerCase() == "milímetro") {
        var valor2 = valor1 * 100
        var sigla = "mm"
    }
    /* Centímetro em Quilômetro */
    else if (medida.toLowerCase() == "centímetro" && medida2.toLowerCase() == "quilômetro") {
        var valor2 = valor1 * 0.00001
        var sigla = "km"
    }
    /* Centímetro em Hectômetro */
    else if (medida.toLowerCase() == "centímetro" && medida2.toLowerCase() == "hectômetro") {
        var valor2 = valor1 * 0.0001
        var sigla = "hm"
    }
    /* Centímetro em Decâmetro */
    else if (medida.toLowerCase() == "centímetro" && medida2.toLowerCase() == "decâmetro") {
        var valor2 = valor1 * 0.001
        var sigla = "dam"
    }
    /* Centímetro em Metro */
    else if (medida.toLowerCase() == "centímetro" && medida2.toLowerCase() == "metro") {
        var valor2 = valor1 * 0.01
        var sigla = "m"
    }
    /* Centímetro em Decímetro */
    else if (medida.toLowerCase() == "centímetro" && medida2.toLowerCase() == "decímetro") {
        var valor2 = valor1 * 0.1
        var sigla = "dm"
    }
    /* Centímetro em Centímetro */
    else if (medida.toLowerCase() == "centímetro" && medida2.toLowerCase() == "centímetro") {
        var valor2 = valor1 * 1
        var sigla = "cm"
    }
    /* Centímetro em Milímetro */
    else if (medida.toLowerCase() == "centímetro" && medida2.toLowerCase() == "milímetro") {
        var valor2 = valor1 * 10
        var sigla = "mm"
    }
    /* Milímetro em Quilômetro */
    else if (medida.toLowerCase() == "milímetro" && medida2.toLowerCase() == "quilômetro") {
        var valor2 = valor1 * 0.000001
        var sigla = "km"
    }
    /* Milímetro em Hectômetro */
    else if (medida.toLowerCase() == "milímetro" && medida2.toLowerCase() == "hectômetro") {
        var valor2 = valor1 * 0.00001
        var sigla = "hm"
    }
    /* Milímetro em Decâmetro */
    else if (medida.toLowerCase() == "milímetro" && medida2.toLowerCase() == "decâmetro") {
        var valor2 = valor1 * 0.0001
        var sigla = "dam"
    }
    /* Milímetro em Metro */
    else if (medida.toLowerCase() == "milímetro" && medida2.toLowerCase() == "metro") {
        var valor2 = valor1 * 0.001
        var sigla = "m"
    }
    /* Milímetro em Decímetro */
    else if (medida.toLowerCase() == "milímetro" && medida2.toLowerCase() == "decímetro") {
        var valor2 = valor1 * 0.01
        var sigla = "dm"
    }
    /* Milímetro em Centímetro */
    else if (medida.toLowerCase() == "milímetro" && medida2.toLowerCase() == "centímetro") {
        var valor2 = valor1 * 0.1
        var sigla = "cm"
    }
    /* Milímetro em Milímetro */
    else if (medida.toLowerCase() == "milímetro" && medida2.toLowerCase() == "milímetro") {
        var valor2 = valor1 * 1
        var sigla = "mm"
    }

    /* Exibição */
    document.getElementById("valorFinalMedida").innerHTML = valor2.toFixed(2) + " " + sigla
    document.getElementById("medidaa").innerHTML = medida
    document.getElementById("medidaa2").innerHTML = medida2
    document.getElementById("converterMedida2").innerHTML = valor1.toFixed(2)
}

/* ===== REVERTER ===== */
/* revertendo tempo */
function revertTemperature() {
    var temp = document.getElementById("temp").value
    var temp2 = document.getElementById("temp2").value

    /* Reverter */
    document.getElementById("temp").value = temp2
    document.getElementById("temp2").value = temp
}

/* revertendo temperatura */
function revertTime() {
    var tempo = document.getElementById("tempo").value
    var tempo2 = document.getElementById("tempo2").value

    /* Reverter */
    document.getElementById("tempo").value = tempo2
    document.getElementById("tempo2").value = tempo
}

/* revertendo moeda */
function revertMoney() {
    var moeda = document.getElementById("moeda").value
    var moeda2 = document.getElementById("moeda2").value

    /* Reverter */
    document.getElementById("moeda").value = moeda2
    document.getElementById("moeda2").value = moeda
}

/* revertendo medida */
function revertMeasures() {
    var medida = document.getElementById("medida").value
    var medida2 = document.getElementById("medida2").value

    /* Reverter */
    document.getElementById("medida").value = medida2
    document.getElementById("medida2").value = medida
}


