// non primitive data types
// object datatype:
var person = {
  name: "Kiran",
  age: 20
};

person.name = "vishnu";

console.log(person,typeof(person));

// array datatype
//internally js treats arrays as objects
//arrays are just objects with numeric indexes
//in js there is no seperate type called the array in typeof
//it is mainly designed for the number,string,boolean,undefined,object,function
//arrays are added later as a special kind of obect,not as a newtype
//arrays in js are objects with special behaviour,not a sepreate data type-that's why type of returns "object"
let numbers = [1, 2, 3];

numbers[0] = 100;

console.log(numbers,typeof(numbers));
// function datatype
function greet() {
  return "Hasya";
}

console.log(greet());
// object{}
var obj={name:"udayani",age:20,role:"associate",city:"hyd",attendance:{jan:26,feb:34}}
console.log(obj,typeof(obj))
var a={}
// array[]
var arr=[1,2,3,4,"hello","hai",true,false,null,[1,22,4564,[6,98,897]]]
console.log(arr)
// 
function Hello(){
    console.log("hii how are you")
}Hello()




// calculation of salary based on the no.of working days
function salary(name, days) {//parameters
    var perday = 2000;
    console.log("monthly salary of", name, "is", perday * days);
    return perday * days;
}

salary("naresh", 20);//arguements
console.log(salary("vamsi", 34));
console.log("all the salaries are calculated");
console.log(typeof(salary))
//date data type


let d = new Date();
console.log(d,typeof(d));