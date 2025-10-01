const nombre ="Lautaro aaaaa"
const saludo =  `Hola, soy ${nombre}`
console.log(saludo)

console.log("1"==1)
console.log("1"===1)
const lista=[1, "hola",null].length
console.log(lista)
function saludar(nombre){
    console.log(`Hola ${nombre}` )
    return"hola${nombre}"
}

saludar("mono")
saludar(nombre)
saludar(saludo)

const misaludo=saludar("buenas")
console.log(misaludo)