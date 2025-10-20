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
const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]
let hayGanador = false
for (let i = 0; i < celdas.length; i++) {

    estado.push(null)
    celdas[i].onclick = function (evento) {
        if (estado[i]) return
        estado[i] = jugadorActual
        evento.target.innerText = jugadorActual
        console.log(combinacionesGanadoras.map((item) => {
            return [estado[item[0]], estado[item[1]], estado[item[1]] , estado[item[2]]]
        })
        )

        hayGanador = combinacionesGanadoras.map((item) => {
            return estado[item[0]] === estado[item[1]] && estado[item[1]] === estado[item[2]] && estado[item[0]]!==null
        }).some(i => i)
        
        if (hayGanador) {
            alert(`Gano el jugador ${jugadorActual}`)
            return
        }
        
        if (jugadorActual === jugador2) {
            jugadorActual = jugador1
        } else {
            jugadorActual = jugador2
        }

    }
}
function mifuncion(visitas){
return visitas+1
}
mifuncion(7)
