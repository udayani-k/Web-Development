//finding the values of circle,rectangle,square by using the functions
function circlearea(r){
    var area = 3.14 * r * r;
    console.log("Area of circle: " + area);
}

function squarearea(s){
    var area = s * s;
    console.log("Area of square: " + area);
}

function rectanglearea(l, w){
    var area = l * w;
    console.log("Area of rectangle: " + area);
}

var radius =prompt("Enter radius of circle");
var side = prompt("Enter side of square");
var length =prompt("Enter length of rectangle");
var width = prompt("Enter width of rectangle");

circlearea(radius);
squarearea(side);
rectanglearea(length, width);