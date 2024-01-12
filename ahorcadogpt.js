const sc = require("prompt-sync")({ sigint: true })
const palabras = ["virginia", "estafa", "españoles", "ransomware", "manzana", "secreta", "osteoporosis", "xilofono", "seguridad", "alexander"]
let fallo = true
let i = 0
let puntos = 0
escogerPalabra(palabras)
let intentos = 0
let luser
console.log(palabras[i])
let aciertos = []

while (intentos !== 6 && puntos !== palabras[i].length) {
    fallo = true
    console.log(fallo)
    luser = sc("Escribe una letra y así salvarás a Pedro -> ")
    // Verificar si la letra ya está en aciertos
    console.log(palabras[i].indexOf(luser)+" IndexOF")
        for (let n = 0; n < palabras[i].length; n++) {
            if (luser == palabras[i].charAt(n)&& !aciertos.includes(luser)){
                fallo = false
                aciertos.push(palabras[i].charAt(n))
                puntos++
                console.log(fallo)
            }
        }
    if (fallo) {
        intentos++
    }
    console.log("Has acertado "+puntos+ " letras")
    for (let y = 0; y < aciertos.length; y++) {
        console.log("La letra "+aciertos[y]+" se encuentra en la posición "+palabras[i].indexOf(aciertos[y]))
    }
}

function escogerPalabra(palabras) {
    i = Math.floor(Math.random() * palabras.length)
    return palabras[i]
}
//s
