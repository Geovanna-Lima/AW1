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
    var temperatureValue = document.getElementById("typesTemperature")
    var temperature = temperatureValue.options[temperatureValue.selectedIndex].text
    var temperatureTwoValue = document.getElementById("typesTemperatureTwo")
    var temperatureTwo = temperatureTwoValue.options[temperatureTwoValue.selectedIndex].text

    /* Conversão */
    var valueOne = parseFloat(document.getElementById("temperatureConvert").value)

    /* Fahrenheit para Celsius */
    if (temperature == "Fahrenheit" && temperatureTwo == "Celsius") {
        var valueTwo = ((valueOne - 32) * 5) / 9
        var initials = "°C"
    }
    /* Fahrenheit para Kelvin */
    else if (temperature == "Fahrenheit" && temperatureTwo == "Kelvin") {
        var valueTwo = (valueOne - 32) * 5 / 9 + 273.15
        var initials = "°K"
    }
    /* Fahrenheit para Fahrenheit */
    else if (temperature == "Fahrenheit" && temperatureTwo == "Fahrenheit") {
        var valueTwo = valueOne
        var initials = "°F"
    }
    /* Celcius para Fahrenheit */
    else if (temperature == "Celsius" && temperatureTwo == "Fahrenheit") {
        var valueTwo = (valueOne * 9) / 5 + 32
        var initials = "°F"
    }
    /* Celcius para Kelvin */
    else if (temperature == "Celsius" && temperatureTwo == "Kelvin") {
        var valueTwo = (valueOne + 273.15)
        var initials = "°K"
    }
    /* Celcius para Celcius */
    else if (temperature == "Celsius" && temperatureTwo == "Celsius") {
        var valueTwo = valueOne
        var initials = "°C"
    }
    /* Kelvin para Fahrenheit */
    else if (temperature == "Kelvin" && temperatureTwo == "Fahrenheit") {
        var valueTwo = (valueOne - 273.15) * 9 / 5 + 32
        var initials = "°F"
    }
    /* Kelvin para Celcius */
    else if (temperature == "Kelvin" && temperatureTwo == "Celsius") {
        var valueTwo = (valueOne - 273.15)
        var initials = "°C"
    }
    /* Kelvin para Kelvin  */
    else if (temperature == "Kelvin" && temperatureTwo == "Kelvin") {
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
    var timeValue = document.getElementById("typesTime")
    var time = timeValue.options[timeValue.selectedIndex].text
    var timeTwoValue = document.getElementById("typesTimeTwo")
    var timeTwo = timeTwoValue.options[timeTwoValue.selectedIndex].text

    /* Conversão */
    var valueOne = parseFloat(document.getElementById("timeConvert").value)

    /* Hora em Minuto */
    if (time == "Horas" && timeTwo == "Minutos") {
        var valueTwo = valueOne * 60
        var initials = "min"
    }
    /* Hora em Segundo */
    else if (time == "Horas" && timeTwo == "Segundos") {
        var valueTwo = valueOne * 3600
        var initials = "seg"
    }
    /* Hora em Hora */
    else if (time == "Horas" && timeTwo == "Horas") {
        var valueTwo = valueOne
        var initials = "hrs"
    }
    /* Minuto em Hora */
    else if (time == "Minutos" && timeTwo == "Horas") {
        var valueTwo = valueOne / 60
        var initials = "hrs"
    }
    /* Minuto em Segundo */
    else if (time == "Minutos" && timeTwo == "Segundos") {
        var valueTwo = valueOne * 60
        var initials = "seg"
    }
    /* Minuto em Minuto */
    else if (time == "Minutos" && timeTwo == "Minutos") {
        var valueTwo = valueOne
        var initials = "min"
    }
    /* Segundo em Hora */
    else if (time == "Segundos" && timeTwo == "Horas") {
        var valueTwo = valueOne / 3600
        var initials = "hrs"
    }
    /* Segundo em Minuto */
    else if (time == "Segundos" && timeTwo == "Minutos") {
        var valueTwo = valueOne / 60
        var initials = "min"
    }
    /* Segundo em Segundo */
    else if (time == "Segundos" && timeTwo == "Segundos") {
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
    var moneyValue = document.getElementById("typesMoney")
    var money = moneyValue.options[moneyValue.selectedIndex].text
    var moneyTwoValue = document.getElementById("typesMoneyTwo")
    var moneyTwo = moneyTwoValue.options[moneyTwoValue.selectedIndex].text

    /* Conversão */
    var valueOne = parseFloat(document.getElementById("moneyConvert").value)

    /* Dólar em Libra */
    if (money == "Dólar" && moneyTwo == "Libra") {
        var valueTwo = valueOne * 0.73
        var initials = "GBP"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (£0.73)"
    }
    /* Dólar em Real */
    else if (money == "Dólar" && moneyTwo == "Real") {
        var valueTwo = valueOne * 5.46
        var initials = "BRL"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (R$5.46)"
    }
    /* Dólar em Euro */
    else if (money == "Dólar" && moneyTwo == "Euro") {
        var valueTwo = valueOne * 0.86
        var initials = "EUR"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (0.86 €)"
    }
    /* Dólar em Dólar */
    else if (money == "Dólar" && moneyTwo == "Dólar") {
        var valueTwo = valueOne
        var initials = "USD"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (US$1.00)"
    }
    /* Libra em Dólar */
    else if (money == "Libra" && moneyTwo == "Dólar") {
        var valueTwo = valueOne * 1.37
        var initials = "USD"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (US$1.37)"
    }
    /* Libra em Real */
    else if (money == "Libra" && moneyTwo == "Real") {
        var valueTwo = valueOne * 7.50
        var initials = "BRL"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (R$7.50)"
    }
    /* Libra em Euro */
    else if (money == "Libra" && moneyTwo == "Euro") {
        var valueTwo = valueOne * 1.19
        var initials = "EUR"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (1.19 €)"
    }
    /* Libra em Libra */
    else if (money == "Libra" && moneyTwo == "Libra") {
        var valueTwo = valueOne
        var initials = "GBP"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (£1.00)"
    }
    /* Real em Dólar */
    else if (money == "Real" && moneyTwo == "Dólar") {
        var valueTwo = valueOne * 0.18
        var initials = "USD"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (US$0.18)"
    }
    /* Real em Libra */
    else if (money == "Real" && moneyTwo == "Libra") {
        var valueTwo = valueOne * 0.13
        var initials = "GBP"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (£0.13)"
    }
    /* Real em Euro */
    else if (money == "Real" && moneyTwo == "Euro") {
        var valueTwo = valueOne * 0.16
        var initials = "EUR"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (0.16 €)"
    }
    /* Real em Real */
    else if (money == "Real" && moneyTwo == "Real") {
        var valueTwo = valueOne
        var initials = "BRL"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (R$1.00)"
    }
    /* Euro em Dólar */
    else if (money == "Euro" && moneyTwo == "Dólar") {
        var valueTwo = valueOne * 1.16
        var initials = "USD"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (US$1.16)"
    }
    /* Euro em Libra */
    else if (money == "Euro" && moneyTwo == "Libra") {
        var valueTwo = valueOne * 0.84
        var initials = "GBP"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (£0.84)"
    }
    /* Euro em Real*/
    else if (money == "Euro" && moneyTwo == "Real") {
        var valueTwo = valueOne * 6.33
        var initials = "BRL"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (R$6.33)"
    }
    /* Euro em Euro*/
    else if (money == "Euro" && moneyTwo == "Euro") {
        var valueTwo = valueOne
        var initials = "EUR"

        document.getElementById("currencyConversionTwo").innerHTML = moneyTwo + " (1.00 €)"
    }

    /* Exibição */
    document.getElementById("finalCurrencyValue").innerHTML = valueTwo.toFixed(2) + " " + initials
    document.getElementById("currencyConversion").innerHTML = money
    document.getElementById("moneyConvertTwo").innerHTML = valueOne.toFixed(2)
}

/* Conversor de Medida */
function convertMeasures() {
    /* Variáveis */
    var measureValue = document.getElementById("typesMeasures")
    var measure = measureValue.options[measureValue.selectedIndex].text
    var measureTwoValue = document.getElementById("typesMeasuresTwo")
    var measureTwo = measureTwoValue.options[measureTwoValue.selectedIndex].text

    /* Conversão */
    var valueOne = parseFloat(document.getElementById("measuresConvert").value)

    /* Quilômetro em Quilômetro  */
    if (measure == "Quilômetro" && measureTwo == "Quilômetro") {
        var valueTwo = valueOne * 1
        var initials = "km"
    }
    /* Quilômetro em Hectômetro */
    else if (measure == "Quilômetro" && measureTwo == "Hectômetro") {
        var valueTwo = valueOne * 10
        var initials = "hm"
    }
    /* Quilômetro em Decâmetro */
    else if (measure == "Quilômetro" && measureTwo == "Decâmetro") {
        var valueTwo = valueOne * 100
        var initials = "dam"
    }
    /* Quilômetro em Metro */
    else if (measure == "Quilômetro" && measureTwo == "Metro") {
        var valueTwo = valueOne * 1000
        var initials = "m"
    }
    /* Quilômetro em Decímetro */
    else if (measure == "Quilômetro" && measureTwo == "Decímetro") {
        var valueTwo = valueOne * 10000
        var initials = "dm"
    }
    /* Quilômetro em Centímetro */
    else if (measure == "Quilômetro" && measureTwo == "Centímetro") {
        var valueTwo = valueOne * 100000
        var initials = "cm"
    }
    /* Quilômetro em Milímetro */
    else if (measure == "Quilômetro" && measureTwo == "Milímetro") {
        var valueTwo = valueOne * 1000000
        var initials = "mm"
    }
    /* Hectômetro em Quilômetro */
    else if (measure == "Hectômetro" && measureTwo == "Quilômetro") {
        var valueTwo = valueOne * 0.1
        var initials = "km"
    }
    /* Hectômetro em Hectômetro */
    else if (measure == "Hectômetro" && measureTwo == "Hectômetro") {
        var valueTwo = valueOne * 1
        var initials = "hm"
    }
    /* Hectômetro em Decâmetro */
    else if (measure == "Hectômetro" && measureTwo == "Decâmetro") {
        var valueTwo = valueOne * 10
        var initials = "dam"
    }
    /* Hectômetro em Metro */
    else if (measure == "Hectômetro" && measureTwo == "Metro") {
        var valueTwo = valueOne * 100
        var initials = "m"
    }
    /* Hectômetro em Decímetro */
    else if (measure == "Hectômetro" && measureTwo == "Decímetro") {
        var valueTwo = valueOne * 1000
        var initials = "dm"
    }
    /* Hectômetro em Milímetro */
    else if (measure == "Hectômetro" && measureTwo == "Milímetro") {
        var valueTwo = valueOne * 100000
        var initials = "mm"
    }
    /* Decâmetro em Quilômetro */
    else if (measure == "Decâmetro" && measureTwo == "Quilômetro") {
        var valueTwo = valueOne * 0.01
        var initials = "km"
    }
    /* Decâmetro em Hectômetro */
    else if (measure == "Decâmetro" && measureTwo == "Hectômetro") {
        var valueTwo = valueOne * 0.1
        var initials = "hm"
    }
    /* Decâmetro em Decâmetro */
    else if (measure == "Decâmetro" && measureTwo == "Decâmetro") {
        var valueTwo = valueOne * 1
        var initials = "dam"
    }
    /* Decâmetro em Metro */
    else if (measure == "Decâmetro" && measureTwo == "Metro") {
        var valueTwo = valueOne * 10
        var initials = "m"
    }
    /* Decâmetro em Decímetro */
    else if (measure == "Decâmetro" && measureTwo == "Decímetro") {
        var valueTwo = valueOne * 100
        var initials = "dm"
    }
    /* Decâmetro em Centímetro */
    else if (measure == "Decâmetro" && measureTwo == "Centímetro") {
        var valueTwo = valueOne * 1000
        var initials = "cm"
    }
    /* Decâmetro em Milímetro */
    else if (measure == "Decâmetro" && measureTwo == "Milímetro") {
        var valueTwo = valueOne * 10000
        var initials = "mm"
    }
    /* Metro em Quilômetro */
    else if (measure == "Metro" && measureTwo == "Quilômetro") {
        var valueTwo = valueOne * 0.001
        var initials = "km"
    }
    /* Metro em Hectômetro */
    else if (measure == "Metro" && measureTwo == "Hectômetro") {
        var valueTwo = valueOne * 0.01
        var initials = "hm"
    }
    /* Metro em Decâmetro */
    else if (measure == "Metro" && measureTwo == "Decâmetro") {
        var valueTwo = valueOne * 0.1
        var initials = "dam"
    }
    /* Metro em Metro */
    else if (measure == "Metro" && measureTwo == "metro") {
        var valueTwo = valueOne * 1
        var initials = "m"
    }
    /* Metro em Decímetro */
    else if (measure == "Metro" && measureTwo == "Decímetro") {
        var valueTwo = valueOne * 10
        var initials = "dm"
    }
    /* Metro em Centímetro */
    else if (measure == "Metro" && measureTwo == "Centímetro") {
        var valueTwo = valueOne * 100
        var initials = "cm"
    }
    /* Metro em Milímetro */
    else if (measure == "Metro" && measureTwo == "Milímetro") {
        var valueTwo = valueOne * 1000
        var initials = "mm"
    }
    /* Decímetro em Quilômetro */
    else if (measure == "Decímetro" && measureTwo == "Quilômetro") {
        var valueTwo = valueOne * 0.0001
        var initials = "km"
    }
    /* Decímetro em Hectômetro */
    else if (measure == "Decímetro" && measureTwo == "Hectômetro") {
        var valueTwo = valueOne * 0.001
        var initials = "hm"
    }
    /* Decímetro em Decâmetro */
    else if (measure == "Decímetro" && measureTwo == "Decâmetro") {
        var valueTwo = valueOne * 0.01
        var initials = "dam"
    }
    /* Decímetro em Metro */
    else if (measure == "Decímetro" && measureTwo == "Metro") {
        var valueTwo = valueOne * 0.1
        var initials = "m"
    }
    /* Decímetro em Decímetro */
    else if (measure == "Decímetro" && measureTwo == "Decímetro") {
        var valueTwo = valueOne * 1
        var initials = "dm"
    }
    /* Decímetro em Centímetro */
    else if (measure == "Decímetro" && measureTwo == "Centímetro") {
        var valueTwo = valueOne * 10
        var initials = "cm"
    }
    /* Decímetro em Milímetro */
    else if (measure == "Decímetro" && measureTwo == "Milímetro") {
        var valueTwo = valueOne * 100
        var initials = "mm"
    }
    /* Centímetro em Quilômetro */
    else if (measure == "Centímetro" && measureTwo == "Quilômetro") {
        var valueTwo = valueOne * 0.00001
        var initials = "km"
    }
    /* Centímetro em Hectômetro */
    else if (measure == "Centímetro" && measureTwo == "Hectômetro") {
        var valueTwo = valueOne * 0.0001
        var initials = "hm"
    }
    /* Centímetro em Decâmetro */
    else if (measure == "Centímetro" && measureTwo == "Decâmetro") {
        var valueTwo = valueOne * 0.001
        var initials = "dam"
    }
    /* Centímetro em Metro */
    else if (measure == "Centímetro" && measureTwo == "Metro") {
        var valueTwo = valueOne * 0.01
        var initials = "m"
    }
    /* Centímetro em Decímetro */
    else if (measure == "Centímetro" && measureTwo == "Decímetro") {
        var valueTwo = valueOne * 0.1
        var initials = "dm"
    }
    /* Centímetro em Centímetro */
    else if (measure == "Centímetro" && measureTwo == "Centímetro") {
        var valueTwo = valueOne * 1
        var initials = "cm"
    }
    /* Centímetro em Milímetro */
    else if (measure == "Centímetro" && measureTwo == "Milímetro") {
        var valueTwo = valueOne * 10
        var initials = "mm"
    }
    /* Milímetro em Quilômetro */
    else if (measure == "Milímetro" && measureTwo == "Quilômetro") {
        var valueTwo = valueOne * 0.000001
        var initials = "km"
    }
    /* Milímetro em Hectômetro */
    else if (measure == "Milímetro" && measureTwo == "Hectômetro") {
        var valueTwo = valueOne * 0.00001
        var initials = "hm"
    }
    /* Milímetro em Decâmetro */
    else if (measure == "Milímetro" && measureTwo == "Decâmetro") {
        var valueTwo = valueOne * 0.0001
        var initials = "dam"
    }
    /* Milímetro em Metro */
    else if (measure == "Milímetro" && measureTwo == "Metro") {
        var valueTwo = valueOne * 0.001
        var initials = "m"
    }
    /* Milímetro em Decímetro */
    else if (measure == "Milímetro" && measureTwo == "Decímetro") {
        var valueTwo = valueOne * 0.01
        var initials = "dm"
    }
    /* Milímetro em Centímetro */
    else if (measure == "Milímetro" && measureTwo == "Centímetro") {
        var valueTwo = valueOne * 0.1
        var initials = "cm"
    }
    /* Milímetro em Milímetro */
    else if (measure == "Milímetro" && measureTwo == "Milímetro") {
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
    var temperatureValue = document.getElementById("typesTemperature")
    var temperature = temperatureValue.options[temperatureValue.selectedIndex].text
    var temperatureTwoValue = document.getElementById("typesTemperatureTwo")
    var temperatureTwo = temperatureTwoValue.options[temperatureTwoValue.selectedIndex].text

    /* Reverter */
    temperatureValue.options[temperatureValue.selectedIndex].text = temperatureTwo
    temperatureTwoValue.options[temperatureTwoValue.selectedIndex].text = temperature
}

/* revertendo tempo */
function revertTime() {
    var timeValue = document.getElementById("typesTime")
    var time = timeValue.options[timeValue.selectedIndex].text
    var timeTwoValue = document.getElementById("typesTimeTwo")
    var timeTwo = timeTwoValue.options[timeTwoValue.selectedIndex].text

    /* Reverter */
    timeValue.options[timeValue.selectedIndex].text = timeTwo
    timeTwoValue.options[timeTwoValue.selectedIndex].text = time
}

/* revertendo moeda */
function revertMoney() {
    var moneyValue = document.getElementById("typesMoney")
    var money = moneyValue.options[moneyValue.selectedIndex].text
    var moneyTwoValue = document.getElementById("typesMoneyTwo")
    var moneyTwo = moneyTwoValue.options[moneyTwoValue.selectedIndex].text

    /* Reverter */
    moneyValue.options[moneyValue.selectedIndex].text = moneyTwo
    moneyTwoValue.options[moneyTwoValue.selectedIndex].text = money
}

/* revertendo medida */
function revertMeasures() {
    var measureValue = document.getElementById("typesMeasures")
    var measure = measureValue.options[measureValue.selectedIndex].text
    var measureTwoValue = document.getElementById("typesMeasuresTwo")
    var measureTwo = measureTwoValue.options[measureTwoValue.selectedIndex].text

    /* Reverter */
    measureValue.options[measureValue.selectedIndex].text = measureTwo
    measureTwoValue.options[measureTwoValue.selectedIndex].text = measure
}

/* ===== VERIFICAÇÃO LIMITE DOS CAMPOS DE TEMPERATURA ===== */
function verificationTemperature() {
    var temperatureConvert = document.getElementById('temperatureConvert').value
    var temperatureValue = document.getElementById("typesTemperature")
    var temperature = temperatureValue.options[temperatureValue.selectedIndex].text

    if (((temperatureConvert > 212) || (temperatureConvert < -459)) && (temperature == "Fahrenheit")) {
        swal("A temperatura Fahrenheit deve estar entre -459°F e 212°F!")
    } else if (((temperatureConvert > 100) || (temperatureConvert < -273)) && (temperature == "Celsius")) {
        swal("A temperatura Celsius deve estar entre -273°C e 100°C!")
    } else if (((temperatureConvert > 373.15) || (temperatureConvert < 0)) && (temperature == "Kelvin")) {
        swal("A temperatura Kelvin deve estar entre 0°K e 373°K!")
    } else {
        valueTemperature()
    }
}

/* ===== VALIDAR CAMPOS ===== */
/* moeda */
function valueMoney() {
    var moneyConvert = document.getElementById('moneyConvert').value
    var moneyValue = document.getElementById("typesMoney")
    var money = moneyValue.options[moneyValue.selectedIndex].text
    var moneyTwoValue = document.getElementById("typesMoneyTwo")
    var moneyTwo = moneyTwoValue.options[moneyTwoValue.selectedIndex].text
    var toCheck = false

    if (moneyConvert === '') {
        swal("É necessário digitar um valor!")
    } else if ((money == 'Escolha uma opção') || (moneyTwo == 'Escolha uma opção')) {
        swal("É necessário escolher uma opção!")
    } else {
        toCheck = true
    }

    if (toCheck) {
        convertMoney()
    }
}

/* temperatura */
function valueTemperature() {
    var temperatureConvert = document.getElementById('temperatureConvert').value
    var temperatureValue = document.getElementById("typesTemperature")
    var temperature = temperatureValue.options[temperatureValue.selectedIndex].text
    var temperatureTwoValue = document.getElementById("typesTemperatureTwo")
    var temperatureTwo = temperatureTwoValue.options[temperatureTwoValue.selectedIndex].text
    var toCheck = false

    if (temperatureConvert === '') {
        swal("É necessário digitar um valor!")
    } else if ((temperature == 'Escolha uma opção') || (temperatureTwo == 'Escolha uma opção')) {
        swal("É necessário escolher uma opção!")
    } else {
        toCheck = true
    }

    if (toCheck) {
        convertTemperature()
    }
}

/* medidas */
function valueMeasures() {
    var measuresConvert = document.getElementById('measuresConvert').value
    var measureValue = document.getElementById("typesMeasures")
    var measure = measureValue.options[measureValue.selectedIndex].text
    var measureTwoValue = document.getElementById("typesMeasuresTwo")
    var measureTwo = measureTwoValue.options[measureTwoValue.selectedIndex].text
    var toCheck = false

    if (measuresConvert === '') {
        swal("É necessário digitar um valor!")
    } else if ((measure == 'Escolha uma opção') || (measureTwo == 'Escolha uma opção')) {
        swal("É necessário escolher uma opção!")
    } else {
        toCheck = true
    }

    if (toCheck) {
        convertMeasures()
    }
}

/* tempo */
function valueTime() {
    var timeConvert = document.getElementById('timeConvert').value
    var timeValue = document.getElementById("typesTime")
    var time = timeValue.options[timeValue.selectedIndex].text
    var timeTwoValue = document.getElementById("typesTimeTwo")
    var timeTwo = timeTwoValue.options[timeTwoValue.selectedIndex].text
    var toCheck = false

    if (timeConvert === '') {
        swal("É necessário digitar um valor!")
    } else if ((time == 'Escolha uma opção') || (timeTwo == 'Escolha uma opção')) {
        swal("É necessário escolher uma opção!")
    } else {
        toCheck = true
    }

    if (toCheck) {
        convertTime()
    }
}

/* ===== VERIFICAÇÃO VALORES DE CADA CAMPO ===== */
const masks = {
    /* moeda e medida*/
    /* não pode entrar com valores negativos */
    /* pode entrar com vírgula */
    moneyMeasure(value) {
        return value
            .replace(/[a-zA-Z]/, '')
            .replace(' ', '')
            .replace(',', '.')
            .replace('-', '')
            .replace('*', '')
            .replace('+', '')
            .replace('/', '')
            .replace('_', '')
            .replace('&', '')
            .replace('(', '')
            .replace(')', '')
            .replace('!', '')
            .replace('¨', '')
            .replace('%', '')
            .replace('$', '')
            .replace('#', '')
            .replace('@', '')
            .replace('\"', '')
            .replace('\'', '')
            .replace('|', '')
            .replace('\\', '')
            .replace(':', '')
            .replace(';', '')
            .replace('°', '')
            .replace('º', '')
            .replace('ª', '')
            .replace('^', '')
            .replace('~', '')
            .replace('`', '')
            .replace('´', '')
            .replace('§', '')
            .replace('{', '')
            .replace('}', '')
            .replace('[', '')
            .replace(']', '')
            .replace('¹', '')
            .replace('²', '')
            .replace('³', '')
            .replace('£', '')
            .replace('¢', '')
            .replace('¬', '')

    },
    /* temperatura */
    /* pode entrar com valores negativos */
    /* pode entrar com vírgula */
    temperature(value) {
        return value
            .replace(/[a-zA-Z]/, '')
            .replace(' ', '')
            .replace(',', '.')
            .replace('*', '')
            .replace('+', '')
            .replace('/', '')
            .replace('_', '')
            .replace('&', '')
            .replace('(', '')
            .replace(')', '')
            .replace('!', '')
            .replace('¨', '')
            .replace('%', '')
            .replace('$', '')
            .replace('#', '')
            .replace('@', '')
            .replace('\"', '')
            .replace('\'', '')
            .replace('|', '')
            .replace('\\', '')
            .replace(':', '')
            .replace(';', '')
            .replace('°', '')
            .replace('º', '')
            .replace('ª', '')
            .replace('^', '')
            .replace('~', '')
            .replace('`', '')
            .replace('´', '')
            .replace('§', '')
            .replace('{', '')
            .replace('}', '')
            .replace('[', '')
            .replace(']', '')
            .replace('¹', '')
            .replace('²', '')
            .replace('³', '')
            .replace('£', '')
            .replace('¢', '')
            .replace('¬', '')
    },
    /* tempo */
    /* não pode entrar com vírgula */
    /* não pode entrar com valores negativos */
    time(value) {
        return value
            .replace(/\D/g, '')
    },
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})