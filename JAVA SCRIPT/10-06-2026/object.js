//consructor
function employee(a,b,c){
    this.name=a;
    this.role=b;
    this.dept=c;
}
let emp1=new employee("udayani","ASE","IT")
let emp2=new employee("Hasya","SE","IT")
console.log(emp1)
console.log(emp2)
//class
class Emp{
    constructor(a,b,c){
        this.name=a;
        this.role=b;
        this.dept=c;

    }
}
var m=new Emp("udayani","ASE","IT")
console.log(m)
//copying of objects
let obj={name:"udayani",empid:56775,Bloodgroup:"b positive",Doj:"may"}
console.log(obj)
//normal copy:with the help of assignment operator
let obj1=obj
obj1.salary=98908
console.log(obj1)
console.log(obj)
//shallow copy:with the help of spread operator
var obj2={...obj}
obj2.a="one"
obj.b="two"
console.log(obj2)
console.log(obj)
//
var original={one:"a",two:"b",three:"c",obj:{a:"Hello",b:"hai"}}
var copy={...original}
copy.obj.a="good morning"
original.k="bye"
console.log("copy",copy)
console.log("original",original)
//Deep copy
var copy1 = JSON.parse(JSON.stringify(original))
console.log("copy1", copy1)
original.nine = "goodbye"
copy1.obj.a = "hey"
console.log("copy1", copy1)
console.log("original", original)
//copying of arrays
var arr=[45,67,34,[87,95,45,96]]
//normal copy
var copy=arr
console.log(arr[3][0])
console.log("arr",arr)
arr[0]=10
console.log("copy",copy)
//shallow copy
var copy1=[...arr]
arr[0]=9999
copy1[3][0]=1000
console.log("original",arr)
console.log("copy1",copy1)
//Deep copy
var copy2=JSON.parse(JSON.stringify(arr))
console.log("copy2",copy2)
copy2[3][0]="hello"
console.log(copy2)
console.log(arr)
console.log("hello".toUpperCase())