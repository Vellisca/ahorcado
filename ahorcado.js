const sc = require("prompt-sync")({ sigint: true })
//Array de posibles palabras para jugar.
const palabras = ["virginia", "estafa", "españoles", "ransomware", "manzana", "secreta", "osteoporosis", "xilofono", "seguridad", "alexander"]
let fallo = true
let i = 0
let puntos = 0
//Referencia a la funcion que escoge una palabra aleatoria
escogerPalabra(palabras)
let intentos = 0
let luser
let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let aciertos = []
let espacios = "_"
for (let f = 1; f < palabras[i].length; f++) {
    espacios = espacios.concat("_")
}
//Bucle general que comprueba las vidas y si has acertado la palabra.
while (intentos !== 6 && espacios!=palabras[i]) {
    fallo = true
    //Dibuja a Pedro en función de cuantas veces se ha fallado
    dibujarPedro()
    luser = sc("Escribe una letra y así salvarás a Pedro, escribe pista si necesitas ayuda -> ")
    validarUsuario();
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
                espacios= espacios.substring(0,n)+luser+espacios.substring(n+1,palabras[i].length)
            }
        }
        console.log(espacios)
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
    dibujarPedro()
} else {
    console.log("Pedro ha sobrevivido. Enhorabuena")
    dibujarExito()
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
function validarUsuario(){
    //Esta funcion valida que el usuario solo pueda escribir una letra por turno o la palabra pista pero que no pueda escribir numero y convierte las letras a minuscula
    if(!Number(luser) && luser.length==1 || luser=="pista"){
        luser=luser.toLowerCase();

    }else{
        console.log("Error, debes introducir una letra o la palabra pista");
        fallo=false //Ponemos los fallos en false para que no nos quite vida
    }
}
//

// Funciones de Dibujar ASCII ||
function dibujarPedro() {
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
function dibujarExito() {
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


