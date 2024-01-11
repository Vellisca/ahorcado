const sc = require("prompt-sync")({ sigint: true })
const palabras =["virginia","estafa","españoles","ransomware","manzana","secreta","osteoporosis","xilofono","seguridad","alexander"] 
let fallo=true
let i=0
let puntos=0

escogerPalabra(palabras);
let intentos=0
let luser
console.log(palabras[i])
let aciertos =[]
//
while ((intentos!==6) && (puntos<=palabras[i].length)) {
    fallo=true
    console.log(fallo)
    luser=sc("Escribe una letra y así salvarás a Pedro -> ")
for (let n = 0; n < palabras[i].length; n++) {
    if (luser == palabras[i].charAt(n)) {
        for (let w = 0; w < aciertos.length; w++) {
            if (!aciertos[w].includes(length) && luser==palabras[i].charAt(n)) {
                aciertos.push(palabras[i].charAt(n))
                fallo=false
            }
        
        }

            

        puntos++
        console.log(fallo)
    }
    
}
if (fallo) {
    intentos++
}

console.log("Has acertado "+puntos+ " letras")
console.log(aciertos)
}

//
function escogerPalabra(palabras) {
    i=Math.floor(Math.random()*palabras.length)
    return palabras[i]
}