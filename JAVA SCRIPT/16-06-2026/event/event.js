//
 let child = document.getElementById("innertext");

 function action() {
     console.log("inner h1 clicked");
 }

 child.addEventListener("click", action);


 let outer = document.getElementById("outermost");

 function action1() {
     console.log("outer text clicked");
 }

outer.addEventListener("click", action1);


 let parent = document.getElementById("div");

 function action2() {
     console.log("parent element");
 }

 parent.addEventListener("click", action2);


 let grandParent = document.getElementById("div1");

 function action3() {
    console.log("grand parent element");
 }

 grandParent.addEventListener("click", action3);
// child
// let child = document.getElementById("innertext");

// function action() {
//     console.log("inner h1 clicked");
// }

// child.addEventListener("click", action);



// // outer
// let div = document.getElementById("outermost");

// function action1() {
//     console.log("outer text");
// }

// div.addEventListener("click", action1);



// // parent
// let parent = document.getElementById("div");

// function action2() {
//     console.log("parent element");
// }

// parent.addEventListener("click", action2);