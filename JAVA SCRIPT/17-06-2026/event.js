//event bubbling:ntg but event triggering  traversing the child element to the parent element
//event capturing:ntg but event triggering transvering the parent element to the child element
// event delegation:event will be added to the parent element and  the events will be used by all child elements 
let child=document.getElementById("innertext")

function action(){
    console.log("inner h1 clicked")
}


child.addEventListener("click",action,true)
//



let div=document.getElementById("div")

function action2(){
    console.log("parent element")
}


div.addEventListener("click",action2,true)
let div1=document.getElementById("div1")

function action3(){
    console.log("top parent clicked")
}


div1.addEventListener("click",action3,true)
//

let parent=document.getElementById("outer-text")

function action1(){
    console.log("outer text")
}
parent.addEventListener("click",action1,true)

//Event Delegation
let list=document.getElementById("list")
function listclick(){

console.log("clicked")
}

list.addEventListener("click",function(e){
    console.log(e.target.innerText)
})
// window.onscroll
console.log(window)


//Normal event:You directly give an event (like click) to a specific HTML element Only that element will respond when you interact with it
//event contionuesly fire
let button=document.getElementById("button")

let a=0
let b=0
let d=0

button.addEventListener("click",function(){
    a+=1
    console.log("value of a is:",a)
console.log("Button clicked")
})
//Throttlig:Allow the function to run only once in a fixed time interval, even if the user clicks many times.
let lastclick=0
button.addEventListener("click",function(){
    let current=Date.now()
if(current-lastclick>4000){
    b+=1;
    console.log("value of b is:",b)
    lastclick = current;
}
console.log("Button clicked")
})
//debouncing:
let t
button.addEventListener("click",function(){
     clearTimeout(t)
    t=setTimeout(function(){
        d+=1
        console.log("value of c:",d)
    },1000)
})
  

// //call back functions
// function function1(s){
//     console.log(s)
// }
// function one(a,b,c){
//     console.log("one is executed")
//     c=(a+b)
// }
// one(1,2,function1)

