//hosting:accessing of memory values before code execution
//var
console.log(a)
var a=10
console.log(a)
//let
//console.log(b)
let b=20
console.log(b)
//const
//console.log(c)
const c=23
console.log(c)
// function

var sayHi = function() {
    console.log("Hello");
};
sayHi();
//
let sayLet = () => {
    console.log("Hi");
};

sayLet();
//
const Hii = () => {
    console.log("Hello");
};

Hii();
//Arrays
var arr = [1, 2, 3];

console.log(arr);
//
let array = [89,56,78];

console.log(array);
//
const arrays = [2,5,7];

console.log(arrays);
//objects
//var
console.log(obj);

var obj = {
     key:"hasya",value: 100
};
//let
console.log(user);

let user = {    //let is hoisted
               //but NOT initialized
              //stays in Temporal Dead Zone (TDZ)
    age: 25
};
//const
console.log(data); //let is hoisted
                   //but NOT initialized
                   //stays in Temporal Dead Zone (TDZ)

const data = {
    city: "Delhi"
};
