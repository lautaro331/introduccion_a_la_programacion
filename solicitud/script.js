function crearTarjeta (title,completed){
    const div = document.createElement("div")
    div.classList.add("card")
    div.innerHTML = `<span>${title}</span><span>${completed?"si":"no"}</span>`
    return div
}
const tarjetas = document.getElementById("tareas")
fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
  .then((response) => response.json())
  .then((json) => {
    json.forEach(element => {
    const div = crearTarjeta(element.title,element.completed)
    tarjetas.appendChild(div)
  })})
  
