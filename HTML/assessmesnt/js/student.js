//conditional statements
let marks = 68;

if (marks >= 90) {
    console.log("A Grade");
}
else if (marks >= 75) {
    console.log("B Grade");
}
else if (marks >= 60) {
    console.log("C Grade");
}
else if (marks >= 40) {
    console.log("D Grade");
}
else {
    console.log("Fail");
}
//functions using for  checking even&odd ,positive&negative
function checkevenodd(num){
        if(num%2==0){
            console.log(num+ "even")
        }
        else{
            console.log(num+ "odd")
        }
    }

function checkpositivenegative(num)
{
        if(num>=10){
            console.log("positive")
        }
        else{
            console.log("negative")
        }
            
    }
var num=prompt("enter a number")
checkevenodd(num);
checkpositivenegative(num);
//
if(num>=10){
            console.log("positive")
        }
        else{
            console.log("negative")
        }
           







