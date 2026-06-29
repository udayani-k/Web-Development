// primitive datatypes
var a= 10
var c = 12677656757657575575n
var abc= 40
var name = "udayani"
var bool = true
var k
var m = null
var id = Symbol("id")

console.log(typeof(id))
console.log(a)
console.log(c,typeof(c))
console.log(abc)
console.log(name)
console.log(bool)
console.log(k)
console.log(m)
console.log(id)
// type of operator
console.log(typeof(a))
console.log(typeof(abc))
console.log(typeof(name))
console.log(typeof(bool))
console.log(typeof(m))
console.log(typeof(k))
console.log(typeof(id))

// primitive data types are immutable
let str = "Hello";

str[0] = "Y";   // not allowed
str = "Yello";  // new value created

console.log(str);
// non primitive data types are mutable
let user = {
  name: "Kiran"
};

user.name = "Ravi";   // modifying existing object

console.log(user);
// non primitive data types
// object datatype:
var person = {
  name: "Kiran",
  age: 20
};

person.name = "vishnu";

console.log(person);
// array datatype
let numbers = [1, 2, 3];

numbers[0] = 100;

console.log(numbers);
// function datatype
function greet() {
  return "Hasya";
}

console.log(greet());
