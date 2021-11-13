function soma() {
    var e1 = Number(document.getElementById("v1").value)
    var e2 = Number(document.getElementById("v2").value)

    total = e1 + e2

    document.getElementById("res").innerHTML = `Resposta Soma: ${total}`
}