//function declation:it is a way of defining the function with using function keyword with a function name
function greet() {//where greet is the function name
    console.log("Hello");
}

greet();//arguements

//function expression:storing function inside the variable

//named:the function has its own name,readability,deebugging,recursion
let hell = function sayhello()
{
    console.log("hello")
}
hell();

//anonymous:in this type there is no function name because the function will be used only once this is temporary
const add = function(a,b){
    return a+b;

};
console.log(add(2,3));

//arrow:it is introduced by the ES6 to make the code shorter and cleaner
const multiply=(a,b)=>{
    return a*b;
};
console.log(multiply(4,5));
//or
const mul = n=>n*n;
console.log(mul(6));

//
{
    var a = 10;
}

console.log(a);// it runs because it is a function scope not a block scope

