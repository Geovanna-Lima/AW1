/* ===== MENU ===== */
const nav = document.querySelectorAll('.navigation')
const content = document.querySelector('.content')
const footer = document.querySelector('footer')

function activeMenu() {
    nav.forEach((item) =>
        item.classList.toggle('show'),
    )
    content.classList.toggle('show')
    footer.classList.toggle('show')
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
    var temperature = document.getElementById("temperature").value
    var temperatureTwo = document.getElementById("temperatureTwo").value

    /* Conversão */
    var valueOne = parseFloat(document.getElementById("temperatureConvert").value)

    /* Fahrenheit para Celsius */
    if (temperature.toLowerCase() == "fahrenheit" && temperatureTwo.toLowerCase() == "celsius") {
        var valueTwo = ((valueOne - 32) * 5) / 9
        var initials = "°C"
    }
    /* Fahrenheit para Kelvin */
    else if (temperature.toLowerCase() == "fahrenheit" && temperatureTwo.toLowerCase() == "kelvin") {
        var valueTwo = (valueOne - 32) * 5 / 9 + 273.15
        var initials = "°K"
    }
    /* Fahrenheit para Fahrenheit */
    else if (temperature.toLowerCase() == "fahrenheit" && temperatureTwo.toLowerCase() == "fahrenheit") {
        var valueTwo = valueOne
        var initials = "°F"
    }
    /* Celcius para Fahrenheit */
    else if (temperature.toLowerCase() == "celsius" && temperatureTwo.toLowerCase() == "fahrenheit") {
        var valueTwo = (valueOne * 9) / 5 + 32
        var initials = "°F"
    }
    /* Celcius para Kelvin */
    else if (temperature.toLowerCase() == "celsius" && temperatureTwo.toLowerCase() == "kelvin") {
        var valueTwo = (valueOne + 273.15)
        var initials = "°K"
    }
    /* Celcius para Celcius */
    else if (temperature.toLowerCase() == "celsius" && temperatureTwo.toLowerCase() == "celsius") {
        var valueTwo = valueOne
        var initials = "°C"
    }
    /* Kelvin para Fahrenheit */
    else if (temperature.toLowerCase() == "kelvin" && temperatureTwo.toLowerCase() == "fahrenheit") {
        var valueTwo = (valueOne - 273.15) * 9 / 5 + 32
        var initials = "°F"
    }
    /* Kelvin para Celcius */
    else if (temperature.toLowerCase() == "kelvin" && temperatureTwo.toLowerCase() == "celsius") {
        var valueTwo = (valueOne - 273.15)
        var initials = "°C"
    }
    /* Kelvin para Kelvin  */
    else if (temperature.toLowerCase() == "kelvin" && temperatureTwo.toLowerCase() == "kelvin") {
        var valueTwo = valueOne
        var initials = "°K"
    }

    /* Exibição */
    document.getElementById("finalTemperatureValue").innerHTML = valueTwo.toFixed(2) + " " + initials
    document.getElementById("temperatureConversion").innerHTML = temperature
    document.getElementById("temperatureConversionTwo").innerHTML = temperatureTwo
    document.getElementById("temperatureConvertTwo").innerHTML = valueOne
}

/* Conversor de Tempo */
function convertTime() {
    /* Variáveis */
    var time = document.getElementById("time").value
    var timeTwo = document.getElementById("timeTwo").value

    /* Conversão */
    var valueOne = parseFloat(document.getElementById("timeConvert").value)

    /* Hora em Minuto */
    if (time.toLowerCase() == "horas" && timeTwo.toLowerCase() == "minutos") {
        var valueTwo = valueOne * 60
        var initials = "min"
    }
    /* Hora em Segundo */
    else if (time.toLowerCase() == "horas" && timeTwo.toLowerCase() == "segundos") {
        var valueTwo = valueOne * 3600
        var initials = "seg"
    }
    /* Hora em Hora */
    else if (time.toLowerCase() == "horas" && timeTwo.toLowerCase() == "horas") {
        var valueTwo = valueOne
        var initials = "hrs"
    }
    /* Minuto em Hora */
    else if (time.toLowerCase() == "minutos" && timeTwo.toLowerCase() == "horas") {
        var valueTwo = valueOne / 60
        var initials = "hrs"
    }
    /* Minuto em Segundo */
    else if (time.toLowerCase() == "minutos" && timeTwo.toLowerCase() == "segundos") {
        var valueTwo = valueOne * 60
        var initials = "seg"
    }
    /* Minuto em Minuto */
    else if (time.toLowerCase() == "minutos" && timeTwo.toLowerCase() == "minutos") {
        var valueTwo = valueOne
        var initials = "min"
    }
    /* Segundo em Hora */
    else if (time.toLowerCase() == "segundos" && timeTwo.toLowerCase() == "horas") {
        var valueTwo = valueOne / 3600
        var initials = "hrs"
    }
    /* Segundo em Minuto */
    else if (time.toLowerCase() == "segundos" && timeTwo.toLowerCase() == "minutos") {
        var valueTwo = valueOne / 60
        var initials = "min"
    }
    /* Segundo em Segundo */
    else if (time.toLowerCase() == "segundos" && timeTwo.toLowerCase() == "segundos") {
        var valueTwo = valueOne
        var initials = "seg"
    }

    /* Exibição */
    document.getElementById("finalTimeValue").innerHTML = valueTwo.toFixed(2) + " " + initials
    document.getElementById("timeConversion").innerHTML = time
    document.getElementById("timeConversionTwo").innerHTML = timeTwo
    document.getElementById("timeConvertTwo").innerHTML = valueOne
}

/* Conversor de Moedas */
function convertMoney() {
    /* Variáveis */
    var money = document.getElementById("money").value
    var moneyTwo = document.getElementById("moneyTwo").value

    /* Conversão */
    var valueOne = parseFloat(document.getElementById("moneyConvert").value)

    /* Dólar em Libra */
    if (money.toLowerCase() == "dólar" && moneyTwo.toLowerCase() == "libra") {
        var valueTwo = valueOne * 0.73
        var initials = "GBP"
    }
    /* Dólar em Real */
    else if (money.toLowerCase() == "dólar" && moneyTwo.toLowerCase() == "real") {
        var valueTwo = valueOne * 5.46
        var initials = "BRL"
    }
    /* Dólar em Euro */
    else if (money.toLowerCase() == "dólar" && moneyTwo.toLowerCase() == "euro") {
        var valueTwo = valueOne * 0.86
        var initials = "EUR"
    }
    /* Dólar em Dólar */
    else if (money.toLowerCase() == "dólar" && moneyTwo.toLowerCase() == "dólar") {
        var valueTwo = valueOne
        var initials = "USD"
    }
    /* Libra em Dólar */
    else if (money.toLowerCase() == "libra" && moneyTwo.toLowerCase() == "dólar") {
        var valueTwo = valueOne * 1.37
        var initials = "USD"
    }
    /* Libra em Real */
    else if (money.toLowerCase() == "libra" && moneyTwo.toLowerCase() == "real") {
        var valueTwo = valueOne * 7.50
        var initials = "BRL"
    }
    /* Libra em Euro */
    else if (money.toLowerCase() == "libra" && moneyTwo.toLowerCase() == "euro") {
        var valueTwo = valueOne * 1.19
        var initials = "EUR"
    }
    /* Libra em Libra */
    else if (money.toLowerCase() == "libra" && moneyTwo.toLowerCase() == "libra") {
        var valueTwo = valueOne
        var initials = "GBP"
    }
    /* Real em Dólar */
    else if (money.toLowerCase() == "real" && moneyTwo.toLowerCase() == "dólar") {
        var valueTwo = valueOne * 0.18
        var initials = "USD"
    }
    /* Real em Libra */
    else if (money.toLowerCase() == "real" && moneyTwo.toLowerCase() == "libra") {
        var valueTwo = valueOne * 0.13
        var initials = "GBP"
    }
    /* Real em Euro */
    else if (money.toLowerCase() == "real" && moneyTwo.toLowerCase() == "euro") {
        var valueTwo = valueOne * 0.16
        var initials = "EUR"
    }
    /* Real em Real */
    else if (money.toLowerCase() == "real" && moneyTwo.toLowerCase() == "real") {
        var valueTwo = valueOne
        var initials = "BRL"
    }
    /* Euro em Dólar */
    else if (money.toLowerCase() == "euro" && moneyTwo.toLowerCase() == "dólar") {
        var valueTwo = valueOne * 1.16
        var initials = "USD"
    }
    /* Euro em Libra */
    else if (money.toLowerCase() == "euro" && moneyTwo.toLowerCase() == "libra") {
        var valueTwo = valueOne * 0.84
        var initials = "GBP"
    }
    /* Euro em Real*/
    else if (money.toLowerCase() == "euro" && moneyTwo.toLowerCase() == "real") {
        var valueTwo = valueOne * 6.33
        var initials = "BRL"
    }
    /* Euro em Euro*/
    else if (money.toLowerCase() == "euro" && moneyTwo.toLowerCase() == "euro") {
        var valueTwo = valueOne
        var initials = "EUR"
    }

    /* Exibição */
    document.getElementById("finalCurrencyValue").innerHTML = valueTwo.toFixed(2) + " " + initials
    document.getElementById("currencyConversion").innerHTML = money
    document.getElementById("currencyConversionTwo").innerHTML = moneyTwo
    document.getElementById("moneyConvertTwo").innerHTML = valueOne.toFixed(2)
}

/* Conversor de Medida */
function convertMeasures() {
    /* Variáveis */
    var measure = document.getElementById("measure").value
    var measureTwo = document.getElementById("measureTwo").value

    /* Conversão */
    var valueOne = parseFloat(document.getElementById("measuresConvert").value)

    /* Quilômetro em Quilômetro  */
    if (measure.toLowerCase() == "quilômetro" && measureTwo.toLowerCase() == "quilômetro") {
        var valueTwo = valueOne * 1
        var initials = "km"
    }
    /* Quilômetro em Hectômetro */
    else if (measure.toLowerCase() == "quilômetro" && measureTwo.toLowerCase() == "hectômetro") {
        var valueTwo = valueOne * 10
        var initials = "hm"
    }
    /* Quilômetro em Decâmetro */
    else if (measure.toLowerCase() == "quilômetro" && measureTwo.toLowerCase() == "decâmetro") {
        var valueTwo = valueOne * 100
        var initials = "dam"
    }
    /* Quilômetro em Metro */
    else if (measure.toLowerCase() == "quilômetro" && measureTwo.toLowerCase() == "metro") {
        var valueTwo = valueOne * 1000
        var initials = "m"
    }
    /* Quilômetro em Decímetro */
    else if (measure.toLowerCase() == "quilômetro" && measureTwo.toLowerCase() == "decímetro") {
        var valueTwo = valueOne * 10000
        var initials = "dm"
    }
    /* Quilômetro em Centímetro */
    else if (measure.toLowerCase() == "quilômetro" && measureTwo.toLowerCase() == "centímetro") {
        var valueTwo = valueOne * 100000
        var initials = "cm"
    }
    /* Quilômetro em Milímetro */
    else if (measure.toLowerCase() == "quilômetro" && measureTwo.toLowerCase() == "milímetro") {
        var valueTwo = valueOne * 1000000
        var initials = "mm"
    }
    /* Hectômetro em Quilômetro */
    else if (measure.toLowerCase() == "hectômetro" && measureTwo.toLowerCase() == "quilômetro") {
        var valueTwo = valueOne * 0.1
        var initials = "km"
    }
    /* Hectômetro em Hectômetro */
    else if (measure.toLowerCase() == "hectômetro" && measureTwo.toLowerCase() == "hectômetro") {
        var valueTwo = valueOne * 1
        var initials = "hm"
    }
    /* Hectômetro em Decâmetro */
    else if (measure.toLowerCase() == "hectômetro" && measureTwo.toLowerCase() == "decâmetro") {
        var valueTwo = valueOne * 10
        var initials = "dam"
    }
    /* Hectômetro em Metro */
    else if (measure.toLowerCase() == "hectômetro" && measureTwo.toLowerCase() == "metro") {
        var valueTwo = valueOne * 100
        var initials = "m"
    }
    /* Hectômetro em Decímetro */
    else if (measure.toLowerCase() == "hectômetro" && measureTwo.toLowerCase() == "decímetro") {
        var valueTwo = valueOne * 1000
        var initials = "dm"
    }
    /* Hectômetro em Milímetro */
    else if (measure.toLowerCase() == "hectômetro" && measureTwo.toLowerCase() == "milímetro") {
        var valueTwo = valueOne * 100000
        var initials = "mm"
    }
    /* Decâmetro em Quilômetro */
    else if (measure.toLowerCase() == "decâmetro" && measureTwo.toLowerCase() == "quilômetro") {
        var valueTwo = valueOne * 0.01
        var initials = "km"
    }
    /* Decâmetro em Hectômetro */
    else if (measure.toLowerCase() == "decâmetro" && measureTwo.toLowerCase() == "hectômetro") {
        var valueTwo = valueOne * 0.1
        var initials = "hm"
    }
    /* Decâmetro em Decâmetro */
    else if (measure.toLowerCase() == "decâmetro" && measureTwo.toLowerCase() == "decâmetro") {
        var valueTwo = valueOne * 1
        var initials = "dam"
    }
    /* Decâmetro em Metro */
    else if (measure.toLowerCase() == "decâmetro" && measureTwo.toLowerCase() == "metro") {
        var valueTwo = valueOne * 10
        var initials = "m"
    }
    /* Decâmetro em Decímetro */
    else if (measure.toLowerCase() == "decâmetro" && measureTwo.toLowerCase() == "decímetro") {
        var valueTwo = valueOne * 100
        var initials = "dm"
    }
    /* Decâmetro em Centímetro */
    else if (measure.toLowerCase() == "decâmetro" && measureTwo.toLowerCase() == "centímetro") {
        var valueTwo = valueOne * 1000
        var initials = "cm"
    }
    /* Decâmetro em Milímetro */
    else if (measure.toLowerCase() == "decâmetro" && measureTwo.toLowerCase() == "milímetro") {
        var valueTwo = valueOne * 10000
        var initials = "mm"
    }
    /* Metro em Quilômetro */
    else if (measure.toLowerCase() == "metro" && measureTwo.toLowerCase() == "quilômetro") {
        var valueTwo = valueOne * 0.001
        var initials = "km"
    }
    /* Metro em Hectômetro */
    else if (measure.toLowerCase() == "metro" && measureTwo.toLowerCase() == "hectômetro") {
        var valueTwo = valueOne * 0.01
        var initials = "hm"
    }
    /* Metro em Decâmetro */
    else if (measure.toLowerCase() == "metro" && measureTwo.toLowerCase() == "decâmetro") {
        var valueTwo = valueOne * 0.1
        var initials = "dam"
    }
    /* Metro em Metro */
    else if (measure.toLowerCase() == "metro" && measureTwo.toLowerCase() == "metro") {
        var valueTwo = valueOne * 1
        var initials = "m"
    }
    /* Metro em Decímetro */
    else if (measure.toLowerCase() == "metro" && measureTwo.toLowerCase() == "decímetro") {
        var valueTwo = valueOne * 10
        var initials = "dm"
    }
    /* Metro em Centímetro */
    else if (measure.toLowerCase() == "metro" && measureTwo.toLowerCase() == "centímetro") {
        var valueTwo = valueOne * 100
        var initials = "cm"
    }
    /* Metro em Milímetro */
    else if (measure.toLowerCase() == "metro" && measureTwo.toLowerCase() == "milímetro") {
        var valueTwo = valueOne * 1000
        var initials = "mm"
    }
    /* Decímetro em Quilômetro */
    else if (measure.toLowerCase() == "decímetro" && measureTwo.toLowerCase() == "quilômetro") {
        var valueTwo = valueOne * 0.0001
        var initials = "km"
    }
    /* Decímetro em Hectômetro */
    else if (measure.toLowerCase() == "decímetro" && measureTwo.toLowerCase() == "hectômetro") {
        var valueTwo = valueOne * 0.001
        var initials = "hm"
    }
    /* Decímetro em Decâmetro */
    else if (measure.toLowerCase() == "decímetro" && measureTwo.toLowerCase() == "decâmetro") {
        var valueTwo = valueOne * 0.01
        var initials = "dam"
    }
    /* Decímetro em Metro */
    else if (measure.toLowerCase() == "decímetro" && measureTwo.toLowerCase() == "metro") {
        var valueTwo = valueOne * 0.1
        var initials = "m"
    }
    /* Decímetro em Decímetro */
    else if (measure.toLowerCase() == "decímetro" && measureTwo.toLowerCase() == "decímetro") {
        var valueTwo = valueOne * 1
        var initials = "dm"
    }
    /* Decímetro em Centímetro */
    else if (measure.toLowerCase() == "decímetro" && measureTwo.toLowerCase() == "centímetro") {
        var valueTwo = valueOne * 10
        var initials = "cm"
    }
    /* Decímetro em Milímetro */
    else if (measure.toLowerCase() == "decímetro" && measureTwo.toLowerCase() == "milímetro") {
        var valueTwo = valueOne * 100
        var initials = "mm"
    }
    /* Centímetro em Quilômetro */
    else if (measure.toLowerCase() == "centímetro" && measureTwo.toLowerCase() == "quilômetro") {
        var valueTwo = valueOne * 0.00001
        var initials = "km"
    }
    /* Centímetro em Hectômetro */
    else if (measure.toLowerCase() == "centímetro" && measureTwo.toLowerCase() == "hectômetro") {
        var valueTwo = valueOne * 0.0001
        var initials = "hm"
    }
    /* Centímetro em Decâmetro */
    else if (measure.toLowerCase() == "centímetro" && measureTwo.toLowerCase() == "decâmetro") {
        var valueTwo = valueOne * 0.001
        var initials = "dam"
    }
    /* Centímetro em Metro */
    else if (measure.toLowerCase() == "centímetro" && measureTwo.toLowerCase() == "metro") {
        var valueTwo = valueOne * 0.01
        var initials = "m"
    }
    /* Centímetro em Decímetro */
    else if (measure.toLowerCase() == "centímetro" && measureTwo.toLowerCase() == "decímetro") {
        var valueTwo = valueOne * 0.1
        var initials = "dm"
    }
    /* Centímetro em Centímetro */
    else if (measure.toLowerCase() == "centímetro" && measureTwo.toLowerCase() == "centímetro") {
        var valueTwo = valueOne * 1
        var initials = "cm"
    }
    /* Centímetro em Milímetro */
    else if (measure.toLowerCase() == "centímetro" && measureTwo.toLowerCase() == "milímetro") {
        var valueTwo = valueOne * 10
        var initials = "mm"
    }
    /* Milímetro em Quilômetro */
    else if (measure.toLowerCase() == "milímetro" && measureTwo.toLowerCase() == "quilômetro") {
        var valueTwo = valueOne * 0.000001
        var initials = "km"
    }
    /* Milímetro em Hectômetro */
    else if (measure.toLowerCase() == "milímetro" && measureTwo.toLowerCase() == "hectômetro") {
        var valueTwo = valueOne * 0.00001
        var initials = "hm"
    }
    /* Milímetro em Decâmetro */
    else if (measure.toLowerCase() == "milímetro" && measureTwo.toLowerCase() == "decâmetro") {
        var valueTwo = valueOne * 0.0001
        var initials = "dam"
    }
    /* Milímetro em Metro */
    else if (measure.toLowerCase() == "milímetro" && measureTwo.toLowerCase() == "metro") {
        var valueTwo = valueOne * 0.001
        var initials = "m"
    }
    /* Milímetro em Decímetro */
    else if (measure.toLowerCase() == "milímetro" && measureTwo.toLowerCase() == "decímetro") {
        var valueTwo = valueOne * 0.01
        var initials = "dm"
    }
    /* Milímetro em Centímetro */
    else if (measure.toLowerCase() == "milímetro" && measureTwo.toLowerCase() == "centímetro") {
        var valueTwo = valueOne * 0.1
        var initials = "cm"
    }
    /* Milímetro em Milímetro */
    else if (measure.toLowerCase() == "milímetro" && measureTwo.toLowerCase() == "milímetro") {
        var valueTwo = valueOne * 1
        var initials = "mm"
    }

    /* Exibição */
    document.getElementById("finalMeasureValue").innerHTML = valueTwo.toFixed(2) + " " + initials
    document.getElementById("measureConversion").innerHTML = measure
    document.getElementById("measureConversionTwo").innerHTML = measureTwo
    document.getElementById("measuresConvertTwo").innerHTML = valueOne.toFixed(2)
}

/* ===== REVERTER ===== */
/* revertendo temperatura */
function revertTemperature() {
    var temperature = document.getElementById("temperature").value
    var temperatureTwo = document.getElementById("temperatureTwo").value

    /* Reverter */
    document.getElementById("temperature").value = temperatureTwo
    document.getElementById("temperatureTwo").value = temperature
}

/* revertendo tempo */
function revertTime() {
    var time = document.getElementById("time").value
    var timeTwo = document.getElementById("timeTwo").value

    /* Reverter */
    document.getElementById("time").value = timeTwo
    document.getElementById("timeTwo").value = time
}

/* revertendo moeda */
function revertMoney() {
    var money = document.getElementById("money").value
    var moneyTwo = document.getElementById("moneyTwo").value

    /* Reverter */
    document.getElementById("money").value = moneyTwo
    document.getElementById("moneyTwo").value = money
}

/* revertendo medida */
function revertMeasures() {
    var measure = document.getElementById("measure").value
    var measureTwo = document.getElementById("measureTwo").value

    /* Reverter */
    document.getElementById("measure").value = measureTwo
    document.getElementById("measureTwo").value = measure
}