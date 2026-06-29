//finding 3 largest numbers
function maxofthree(a,b,c){
    if(a>=b&&a>=c){
        console.log("The largest number="+a);
    }
    else if(b>=a&&b>=c)
    {
        console.log("the largest number="+b);
    }
    else
        {
        console.log("the largest number="+c);
    }

}
var a=prompt("enter a number");
var b=prompt("enter b number");
var c=prompt("enter c number");
maxofthree(a,b,c);