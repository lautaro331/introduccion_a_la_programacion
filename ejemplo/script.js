const verde = document.getElementById("verde")
const azul = document.getElementById("azul")
const rojo = document.getElementById("rojo")
const color = document.getElementById("color")

let rojoValue = 0 

function changeColor () {
    color.style.backgroundColor = `rgb(${rojoValue},100,100)`
}

// falta que tome el evento :(
rojo.onchange = (ev) => {
    console.log("monomono")
    rojoValue = ev.target.value
    changeColor()
}