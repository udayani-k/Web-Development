//scope:accessibility or lifetime of that particular variable
//var d=10
let d=99
function hai(a,b){
    var n=67
    console.log(n)
    console.log(a,b,d)
    //block
    {
    var k=456
    let y=89
    const u=90
    console.log(k)
    console.log(y)
    console.log(n)
    console.log(u)
}  
console.log(k)
console.log(n)
}
hai(1,2)



var m=56
console.log(m)
var m=67
console.log(m)
var m=45
console.log(m)
//
let r=6
console.log(r)
     r=78//updated,block scope,but not redeclared
     console.log(r)

     //global scope:variables are decalred outside of the any function or block
     const a=13
     function show(){
        console.log(a)
     }
     show();

     //function scope:variables are declared inside a function
     function test(){
        var z=32
        console.log(z)
     }

     test();
     //lexical scope:inner function access the outer function
     function outer(){
        let w=45
        function inner()
        {
            console.log(w)
        } 
        inner();
     }
     outer();
     //scope chain:if variable isnot found ,JS looks outside step by step
    let s = 6;

function outer() {
    let o = 4;

    function inner() {
        let q = 5;
        console.log(s, o, q);
    }

    inner();
}

outer();


console.log(document)
var c=document.getElementById("mango")
console.log(c)
var d=document.getElementsByClassName("fruit")
console.log(d)
var e=document.querySelector(".fruit")
console.log(e)
var f=document.querySelectorAll(".fruit")
console.log(f)
//travesing
let parent = mango.parentElement;
console.log("Parent element:");
console.log(parent);
console.log("All children:")
console.log(parent.children)
console.log("First child:")
console.log(parent.firstElementChild)
console.log("Last child:")
console.log(parent.lastElementChild)
console.log(mango.nextElementSibling)
console.log(guava.previousElementSibling)
//
// let newElement=document.createElement('h1')
// newElement.innerText="Orange"
// console.log(newElement)
// parent.appendChild(newElement)
// parent.prepend(newElement)
///
// let btn=document.getElementById('btn')
// console.log(btn)
// function hii(){
//     //alert("Button Clicked")
//     hello.innerText="Button Clicked"
// }
// hello.addEventListener("click",hii)


// let hello = document.getElementById("hello");
// hello.addEventListener("mouseover", function () {
//     hello.innerText = "mouseover";
// });


let newElement = document.createElement("h2")
newElement.innerText = "fruits list";
console.log(newElement)
//append & prepend
mango.parentElement.append("completed items");
mango.parentElement.prepend("list of items");
//before
let p = document.createElement("p");
p.innerText = "New List";
mango.parentElement.before(p);
//after
let l = document.createElement("p");
l.innerText = "finish";
mango.parentElement.after(l);


// 1. Create button
let btn = document.createElement("button");// we have made a button but still we didnot place it on the website yet.
btn.innerText = "Click Me";

// 2. Add button to page
document.body.append(btn);//now we can see the button on the screen

// 3. Add event listener (CLICK)
btn.addEventListener("click", function () {
    let p1 = document.createElement("p");
    p1.innerText = "finish";
    document.body.append(p1);
});


// 4. Mouseover event - this runs when your mouse moves onto the button
btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "blue";// it changes background into blue and the text in to thr white
    btn.style.color = "white";
});


// 5. Mouseout event- it runs when mouse leaves the button
btn.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "gray";//mouse leaves
    btn.style.color = "black";// mouse enters
});


// 6. Double click event- special style change
btn.addEventListener("dblclick", function () {
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
});
