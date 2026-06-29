//normalcopy
let obj = {
    name: "udayani",
    empid: 56775,
    Bloodgroup: "b positive",
    Doj: "may",
    nested: { a: "Hello", b: "hai" } 
}
let obj1 = obj

obj1.salary = 76767

console.log("obj1", obj1)
console.log("obj", obj)
///shallow
var original={one:"a",two:"b",three:"c",obj:{a:"Hello",b:"hai"}}
var copy={...original}
copy.obj.a="good morning"//reference
original.k="bye"//primitive
copy.five="hii"//primitive
original.obj.f="good"//reference
console.log("copy",copy)
console.log("original",original)
//Deep Copy
var copy1 = JSON.parse(JSON.stringify(original))
console.log("copy1", copy1)
original.nine = "goodbye"//primitive
copy1.obj.a = "hey"//reference
copy1.nine="html"//primitive
original.obj.eight="nine"//reference
console.log("copy1", copy1)
console.log("original", original)
