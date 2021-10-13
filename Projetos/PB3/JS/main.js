/* ===== MENU ===== */
const menu = document.querySelectorAll('.fa-bars')
const nav = document.querySelector('.navigation')
const content = document.querySelector('.content')

function activeMenu() {
    menu.forEach((item) =>
        item.classList.add('show'),
        nav.style.width = "15.625rem",
        nav.style.transition = "0.4s",
        content.style.width = 'calc(100% - 15.625rem)',
        content.style.transition = "0.4s",
    )
    /* ver com prof */
    this.classList.remove('show')
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
/* ver com o prof */
function mostrarConversao() {
    var convertMoney = document.getElementById("convertMoney")
    var convertTemperature = document.getElementById("convertTemperature")
    var convertMeasures = document.getElementById("convertMeasures")
    var convertTime = document.getElementById("convertTime")

    if (convertMoney.style.display === "inline") {
        convertMoney.style.display = "inline"
        convertTemperature.style.display = "none"
        convertMeasures.style.display = "none"
        convertTime.style.display = "none"
    }
    if (convertTemperature.style.display === "inline") {
        convertMoney.style.display = "none"
        convertTemperature.style.display = "inline"
        convertMeasures.style.display = "none"
        convertTime.style.display = "none"
    }
    if (convertMeasures.style.display === "inline") {
        convertMoney.style.display = "none"
        convertTemperature.style.display = "none"
        convertMeasures.style.display = "inline"
        convertTime.style.display = "none"
    }
    if (convertTime.style.display === "inline") {
        convertMoney.style.display = "none"
        convertTemperature.style.display = "none"
        convertMeasures.style.display = "none"
        convertTime.style.display = "inline"
    }
}

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









//conversor de moedas
function convertMoney() {
    //variaveis
    var moeda = document.getElementById("moeda").value;
    var moeda2 = document.getElementById("moeda2").value;
    //moedas
    if (moeda.toLowerCase() == "dolar" && moeda2.toLowerCase() == "real") {
        var cotacao = 5.51;
        var sigla = "BRL";
    } else if (moeda.toLowerCase() == "real" && moeda2.toLowerCase() == "dolar") {
        var cotacao = 0.18;
        var sigla = "USD";
    } else if (
        moeda.toLowerCase() == "libra" &&
        moeda2.toLowerCase() == "dolar"
    ) {
        var cotacao = 1.39;
        var sigla = "USD";
    } else if (
        moeda.toLowerCase() == "dolar" &&
        moeda2.toLowerCase() == "libra"
    ) {
        var cotacao = 0.72;
        var sigla = "GBP";

    }
    else if (
        moeda.toLowerCase() == "real" &&
        moeda2.toLowerCase() == "libra"
    ) {
        var cotacao = 0.13;
        var sigla = "GBP";
    } else if (
        moeda.toLowerCase() == "libra" &&
        moeda2.toLowerCase() == "real"
    ) {
        var cotacao = 7.64;
        var sigla = "BRL";
    } else {
        document.getElementById("valorFinal").innerHTML = "Moeda desconhecida";
    }
    //conversão
    var valor1 = parseFloat(document.getElementById("converter").value);
    if (valor1 > 0) {
        valor2 = valor1 * cotacao;

        document.getElementById("valorFinal").innerHTML =
            valor2.toFixed(2) + " " + sigla;
    } else if (valor1 == 0) {
        document.getElementById("valorFinal").innerHTML =
            "insira um valor maior que 0";
    } else {
        document.getElementById("valorFinal").innerHTML =
            "insira um valor positivo";
    }
}


//conversor de comprimento
function conversorComp() {
    //variaveis
    var comp = document.getElementById("comp").value;
    var comp2 = document.getElementById("comp2").value;

    //conversão
    var valor1 = parseFloat(document.getElementById("converterComp").value);

    //temperaturas
    if (comp.toLowerCase() == "anos-luz" && comp2.toLowerCase() == "km") {
        var valor2 = valor1 / 0.00000000000010570;
        var sigla = "Km";
    } else if (
        comp.toLowerCase() == "km" &&
        comp2.toLowerCase() == "anos-luz"
    ) {
        var valor2 = valor1 * 0.00000000000010570;
        var sigla = "ly";
    }
    //conversão - exibir
    document.getElementById("valorFinalComp").innerHTML =
        valor2.toFixed(2) + " " + sigla;
}
