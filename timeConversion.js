const teste1 = "07:05:45PM"
console.log(timeConversion(teste1))

function timeConversion(s) {
    console.log(s)
    const removePeriodo = s.slice(-2)
    console.log(removePeriodo)

    let [horas, minutos, segundos] = s.slice(0,8).split(":")

    switch (removePeriodo) {
        case removePeriodo === "AM":
            if (horas == "12") {
                horas = "00"
            } break
        default:
            if (horas !== "12") {
                horas = (parseInt(horas, 10) + 12).toString()
            }
    }
    return `${horas}:${minutos}:${segundos}`
}