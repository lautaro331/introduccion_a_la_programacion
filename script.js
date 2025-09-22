const submit = document.getElementById('submit') 
const input = document.getElementById('input') 
console.log(submit.target)
console.log(submit.target)
input.onclick = (e) =>{
    e.preventDefault()
    console.log(input.value)
}