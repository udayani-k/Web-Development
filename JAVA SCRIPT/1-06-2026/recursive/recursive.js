//recursive function:a function calls by itself is known as recursive function
let sum=0
let one=function rec(a){
    if(a==0)
    {
        return 0
    }
    sum+=a
return sum+rec(a-1)
}
console.log(one(10))

// function currying
function add(h){
    return function(b){
        console.log("second function",b)
    }
} 
var m=add(10)
console.log(m(5))

//function currying
function add(t){
    return function(b){
        console.log((b/100)*100)
        return "completed"

    }
}
var x=add(100)(89)
console.log(add(100)(89))
console.log(x)


// impure functions


//default parameters
function greet(name) {
    console.log("udayani " + name);
}

greet();

// return statement
function sums(r,u){
    return r+u;

}
let result=sums(6,9)
console.log(result)

//factorial
let fact=1
let a=function rec(n){
if(n===0||n===1)
{
    return "done"
}
fact=n*fact
return rec(n-1)

}
console.log(a(10))
//
const mul = a => b => c => a * b * c;

console.log(mul(5)(10)(15))

function employe(a,b,c){
    this.name=a
    this.role=b
    this.dept=c
}
let emp1=new employe("uday","AS","IT")
let emp2=new employe("has","AS","IT")

//
class employ{
    constructor(a,b,c){
        this.name=a
        this.role=b
        this.dept=c
    }

}
var m=new employ("uday","IT","AS")
console.log(m)
  //adding two values by using  this keyword

function hello(a,b){
console.log(this)
console.log(a+b)
}
var m=new hello(10,20)

