console.log(document)
let h1=document.getElementById("heading")
let h4=document.getElementById("text")
console.log(h4)
console.log(h1)
let c=document.getElementsByClassName("h1")
console.log(c)
let q=  document.querySelector(".h1") 
console.log(q)
let u=document.querySelectorAll("text")
console.log(u)
//Traversing
let name=document.getElementById("name")
console.log(name)
let parentElement=name.parentElement
console.log(name.parentElement)
console.log(parentElement.children)
console.log(parentElement.firstElementChild)
console.log(parentElement.lastElementChild)

//creating a DOM element
let newElement=document.createElement('h1')
newElement.innerText="6754343234"
console.log(newElement)
parentElement.appendChild(newElement)//adds in the children list in last
parentElement.prepend(newElement)//adds on the parent list in first
/////
let btn=document.getElementById('btn')
console.log(btn)
btn.onclick=function(){
alert("Button clicked")
console.log("Button clicked")
}
//addEventlistener
//direct call

// function hii(){
//     Hello.innerText="Buttom clicked"
// }
// Hello.addEventListener("click",hii);

// let btn = document.getElementById("btn");

// 1. Click event
btn.addEventListener("click", function () {
    btn.innerText = "Clicked!"
    btn.style.backgroundColor = "lightgreen"
})

// 2. Mouseover event
btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "yellow"
})

// 3. Mouseout event
btn.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "lightgray"
})
// 4. Double click event
btn.addEventListener("dblclick", function () {
    alert("Double Clicked!")
    btn.innerText = "Double Clicked!"
    btn.style.backgroundColor = "orange"
})