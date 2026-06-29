// conditional statements is used for the making the decisions
// if Statement
let raining=true
if(raining)
{
    console.log("Take an Umbrella")
}
// if else Statement
let age = 20
if(age>=18)
{
    console.log("eligible for the vote")
}
else{
    console.log("not eligible for the vote")
}
// if elseif else
    let marks = 78

if(marks >= 90)
{
    console.log("distinction")
}
else if(marks >= 80)
{
    console.log("first class")
}
else if(marks >= 70)
{
    console.log("second class")
}
else{
    console.log("better luck next time")
}
// switch statement:checking many possible values
let day=4
switch (day)
{
    case 1:
    console.log("monday")
    break
    case 2:
    console.log("tuesday")
    break
    case 3:
    console.log("wednesday")
    break
    case 4:
    console.log("thursday")
    break
    default:
        console.log("inavalid day")
}
// ternary operator:short form of the if..else
    let age1=18
let result=age1>=18?"Adult":"Minor"
console.log(result)
