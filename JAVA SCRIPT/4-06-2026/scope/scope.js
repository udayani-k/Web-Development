//block scope
if(true)
{
    let a=33;
    const b=34;
    console.log(a)
    console.log(b)
}
//functional scope
function test(){
    var age=56;
    console.log(age);
}
test();

//
if (true) {
  var a = 1;
}
  let b = 2;
  const c = 3;


console.log(a); 
console.log(b); 
console.log(c); 
//recursive function:untill unless condition becomes false
function countdown(n) {
  if (n === 0) {
    console.log("Done");
    return;
  }

  console.log(n);
  countdown(n - 1);
}
var num=Number(prompt("enter no.of times"));
countdown(num);

// impure functions-random number
function randomnumber1to100(){
 let  num = Math.random();
  num = num * 100;
  num = Math.ceil(num);
  return num;
}
console.log(randomnumber1to100());
//function currying
function add(h){
    return function(b){
        console.log("second function",b)
      
    }
} 
var m=add(10)
console.log(m(5))

//function currying
function add(a){
  return function(b){
    console.log((b/100)*100)

  }
}
var m=add(100)(97)
console.log(add(100)(89))
console.log(m)


//pure Function:it gives the exact value
function square(num) {
  return num * num;
}
console.log(square(20));
//factorial using recursive function
function factorial(n){
  if(n===0||n===1){
    return 1;
  
  }
  return n*factorial(n-1);
}
let none=Number(prompt("enter a number:"));
console.log("factorial:",factorial(none));
//factorial
let n=Number(prompt("enter a number"))
let fact=1;
for(i=1;i<=n;i++){
  fact=fact*i
}
console.log(fact)


