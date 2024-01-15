const sc = require("prompt-sync")({ sigint: true })
//Array de posibles palabras para jugar.
//Array barrabajas 
const palabras = ["virginia", "estafa", "españoles", "ransomware", "manzana", "secreta", "osteoporosis", "xilofono", "seguridad", "alexander"]
let fallo = true
let i = 0
let puntos = 0
//Referencia a la funcion que escoge una palabra aleatoria
escogerPalabra(palabras)
console.log(palabras[i])
let intentos = 0
let luser
let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(palabras[i])
let aciertos = []
let espacios = " "
for (let f = 0; f < palabras[i].length; f++) {
    espacios = espacios.concat("_ ")
}
console.log(espacios)
//Bucle general que comprueba las vidas y si has acertado la palabra.
while (intentos !== 6 && puntos !== palabras[i].length) {
    fallo = true
    //Dibuja a Pedro en función de cuantas veces se ha fallado
    DibujarPedro()
    luser = sc("Escribe una letra y así salvarás a Pedro, escribe pista si necesitas ayuda -> ")
    //Si el user escribe pista le dice las vocales que tiene la palabra
    if (luser == "pista") {
        contarVocales()
    }
    else {
        //Recorre la longitud de la palabra para buscar si la letra existe en la palabra, y si ya ha estado escrita
        for (let n = 0; n < palabras[i].length; n++) {
            if (luser == palabras[i].charAt(n) && !aciertos.includes(luser)) {
                //Establece que no se ha fallado, añade la letra a los aciertos y aumenta los puntos.
                fallo = false
                aciertos.push(palabras[i].charAt(n))
                puntos++
                //Muestra la cantidad de veces que está repetida una letra
                for (let j = 0; j < letras.length; j++) {
                    if ((palabras[i].split(letras[j]).length - 1) >= 2 && luser == letras[j]) {
                        console.log(letras[j] + " está repetida " + (palabras[i].split(letras[j]).length - 1) + " veces")
                    }
                }
            }
            //Muestra de las letras acertadas su posición. 
            if (luser==palabras[i].charAt(n)) {
                console.log("la letra "+luser+" se encuentra en la posición "+(n+1))
            }
        }
        //si no has acertado aumenta los intentos.
        if (fallo && !aciertos.includes(luser)) {
            intentos++
            console.log("Has perdido una vida, ahora tienes " + intentos + " fallo/s, no puedes llegar a seis")
        }
        console.log("Has acertado " + puntos + " letra/s")
        
    }

}
if (intentos >= 6) {
    console.log("Has perdido...")
    console.log("")
    DibujarPedro()
} else {
    console.log("Pedro ha sobrevivido. Enhorabuena")
    DibujarExito()
}
//Funcion que escoge Palabra aleatoria del Array Palabras
function escogerPalabra(palabras) {
    i = Math.floor(Math.random() * palabras.length)
    return palabras[i]
}
//Funcion que cuenta las vocales de la palabra elegida.
function contarVocales() {
    const vocales = "aeiou";
    let numVocales = 0;

    for (let h = 0; h < palabras[i].length; h++) { //primer for que recorre la frase
        for (let j = 0; j < vocales.length; j++) { //segundo for que recorre las vocales
            if (palabras[i].charAt(h) == vocales.charAt(j)) { //igualamos la frase con las vocales es decir los dos for con charAt
                numVocales = numVocales + 1; //para que vaya acumulando 
            }
        }
    }
    console.log("El número total de vocales es: " + numVocales);
}
//

//function filtro() {
//    let escogida =[palabras[i]]
//    escogida.filter()
//}
//function repetirLetra() {
//    console.log(palabras[i].split('a').length-1)
//    let repes =[]
//    let letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//    //push nuevo array palabras spliteadas, cada letra lenght con for para contar numero letras repes
//    for (let z = 0; z < letras.length; z++) {
//        if (z) {
//            repes.push(palabras[i].charAt(n))
//
//        }
//    }
//}

// Funciones de Dibujar ASCII ||
function DibujarPedro() {
    if (intentos == 0) {
        console.log("  +---+")
        console.log("  |   |")
        console.log("      |")
        console.log("      |")
        console.log("      |")
        console.log("      |")
        console.log("=========")
    }
    if (intentos == 1) {
        console.log("  +---+")
        console.log("  |   |")
        console.log("  O   |")
        console.log("      |")
        console.log("      |")
        console.log("      |")
        console.log("=========")
    }
    if (intentos == 2) {
        console.log("  +---+")
        console.log("  |   |")
        console.log("  O   |")
        console.log("  |   |")
        console.log("      |")
        console.log("      |")
        console.log("=========")
    }
    if (intentos == 3) {
        console.log("  +---+")
        console.log("  |   |")
        console.log("  O   |")
        console.log(" /|   |")
        console.log("      |")
        console.log("      |")
        console.log("=========")
    }
    if (intentos == 4) {
        console.log("  +---+")
        console.log("  |   |")
        console.log("  O   |")
        console.log(" /|" + String.fromCodePoint(92) + "  |")
        console.log("      |")
        console.log("      |")
        console.log("=========")
    }
    if (intentos == 5) {
        console.log("  +---+")
        console.log("  |   |")
        console.log("  O   |")
        console.log(" /|" + String.fromCodePoint(92) + "  |")
        console.log(" /    |")
        console.log("      |")
        console.log("=========")
    }
    if (intentos == 6) {
        console.log("  +---+")
        console.log("  |   |")
        console.log("  O   |")
        console.log(" /|" + String.fromCodePoint(92) + "  |")
        console.log(" / " + String.fromCodePoint(92) + "  |")
        console.log("      |")
        console.log("=========")
    }
}
function DibujarExito() {
    console.log(" ⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⢀⣠⣤⣶⣶⣶⣦⣄⡀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣷⣦⡀")
    console.log("⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣾⣆⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⣨⣿⣿⣿⠿⠿⢿⣿⣿⣿")
    console.log("⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⠋⠀⣠⣾⣿⣿⡿⠉⠉⠻⣿⣿⣿⣿⠀⢀⣾⣿⣿⡿⠃⠀⠀⠀⣿⣿⣿")
    console.log("⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⡿⢀⣾⣿⣿⣿⠟⠀⠀⠀⠀⣿⣿⣿⣿⢧⣿⣿⣿⡿⠁⠀⠀⠀⠀⢸⣿⣿")
    console.log("⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣇⣾⣿⣿⣿⠏⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⢀⣿⣿⣿")
    console.log("⠛⢿⣿⠟⢋⣿⣿⣿⣿⣿⣾⣿⣿⣿⡿⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⣼⣿⣿⡿")
    console.log("⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⣰⣿⣿⣿⠟⢸⣿⣿⣿⣿⡀⠀⢀⣠⣾⣿⣿⡟⠀")
    console.log("⠀⠀⠀⢀⣿⣿⣿⣿⣿⠸⣿⣿⣿⣿⣧⣀⣀⣴⣾⣿⣿⣿⠏⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀")
    console.log("⠀⠀⠀⢸⣿⣿⣿⣿⠇⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠙⠿⢿⣿⣿⡿⠟⠋⠀⠀⠀⠀")
    console.log("⠀⠀⠀⣿⣿⣿⣿⡟⠀⠀⠀⠙⠿⢿⣿⣿⡿⠟⠋⠁⢀⣀⣀⣤⣤⣤⣶⣶⣶⣦⠤⠄⠀⠀⠀⠀⠀⠀")
    console.log("⠀⠀⢸⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⢀⣀⣤⣶⣶⣿⣿⣿⣿⣿⠿⠿⠟⠛⠛⣛⣛⡛⠀⠀⠀⠀⠀⠀")
    console.log("⠀⠀⣾⣿⣿⣿⡏⠀⠀⠀⠀⣀⣴⣾⣿⣿⣿⠿⠟⠛⣉⣉⣤⣴⣶⣾⣿⣿⣿⣿⣿⣿⣿⣀⡀⠀⠀⠀")
    console.log("⠀⢠⣿⣿⣿⣿⠀⠀⠀⠐⠾⣿⠿⠛⠋⣉⣠⣴⣶⣿⣿⣿⣿⣿⣿⡿⠿⠟⠛⠛⠋⠉⠉⠉⠉⠀⠀⠀")
    console.log("⠀⣸⣿⣿⣿⠇⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⡿⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    console.log("⢠⣿⣿⣿⡟⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⠿⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
    console.log("⠘⠙⢿⡏⠀⠀⠀⠠⣾⢛⣿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
}


