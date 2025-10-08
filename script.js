const nombre = "Lautaro aaaaa"
const saludo = `Hola, soy ${nombre}`
console.log(saludo)

console.log("1" == 1)
console.log("1" === 1)
const lista = [1, "hola", null].length
console.log(lista)
function saludar(nombre) {
    console.log(`Hola ${nombre}`)
    return "hola${nombre}"
}

saludar("mono")
saludar(nombre)
saludar(saludo)

const misaludo = saludar("buenas")
console.log(misaludo)

let celdas = document.getElementsByClassName("celda")


// if() {}
// switch(){}
// case"verde":

// break
// default
// break;

let estado = []
let jugador1 = "X"
let jugador2 = "O"
let jugadorActual = jugador1

for (let i = 0; i < celdas.length; i++) {

    estado.push(null)
    celdas[i].onclick = function (evento) {
        if (estado[i]) return
        estado[i] = jugador1
        evento.target.innerText = jugadorActual
        if (jugadorActual === jugador2) {
            jugadorActual = jugador1
        } else {
            jugadorActual = jugador2
        }
    }
}
