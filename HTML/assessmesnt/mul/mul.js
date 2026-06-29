//multoplication using function

function mul(a){
    for(i=1; i<=10; i++){
        console.log(a * i);
    }
    
}
var num=Number(prompt("enter a number"));
mul(num);
//by ussing the function checking the eligibility age for vote

function eligibility(age){
    if(age>=18){
        console.log("eligible for vote");
    }
    else{
        console.log("not eligible for vote");

    }
}
var age=prompt("enter your age");
eligibility(age)

//marks and representing grades by using the function
function eligibility(marks){
    if(marks>=90){
        console.log("A grade");
    }
    else if(marks>=80){
        console.log("B grade");
    }
    else if(marks>=70){
        console.log("C grade");
    }
    else if(marks>=60){
        console.log("D grade");
    }
    else if(marks>=40){
        console.log("Fail");
    }
    else{
        console.log("better luck next time")

    }

}
var usemarks=prompt("enter your  marks");
eligibility(usemarks)


for(i=1; i<=10; i++){
        console.log(i);
    }