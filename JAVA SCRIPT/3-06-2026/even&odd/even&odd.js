//finding even and odd numbers

for(i=1;i<10;i++){
    if(i%2==0)
    {
        console.log(i+"Even")
    }
    else{
        console.log(i+"odd")
    }
}
//multipliacation calculator

var u = prompt("enter a number")
{
    for(i=1;i<=10;i++){

        console.log(u*i)
    }
}
//functions
function add(a,b){
    console.log("addition =", a + b);
}
function sub(a,b){
    console.log("substraction=",a-b);
}
function mul(a,b){
    console.log("multipliaction=",a*b);
}
function div(a,b){
    console.log("division=",a/b);
}
var num1=Number(prompt("enter a number"));
var num2=Number(prompt("enter b number"));
// var num2=Number(prompt("enter b number"));
console.log(typeof(num1))
console.log(typeof(num2))
add(num1,num2);
sub(num1,num2);
mul(num1,num2);
div(num1,num2);
//

