//Date
let a=new Date()
console.log(a)//Prints the current date,time
//Template Literal
var c=34
var d=67
console.log(`the value of a ${c} the value of b ${d} the sum of the values ${c+d}`)

//Math Objects
var e=7
var f=10.6
console.log(Math.floor(f))
console.log(Math.round(f))
console.log(Math.ceil(f))
console.log(Math.sqrt(81))
console.log(Math.pow(3,3))
console.log(Math.random())
console.log(Math.random()*1000)
console.log(Math.floor(Math.random()*1000))
let randomNum=Math.floor(Math.random()*(50-10+1))+12
let random=Math.floor(Math.random()*10)+1;
console.log(randomNum)
console.log(random)

//string methods
var str="My Self Udayani"
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.replace("M","m"))
console.log(str.length)
console.log(str.charAt(3))
console.log(str.startsWith("My"))//gives true or false
console.log(str.endsWith("Udayni"))//gives true or false
console.log(str.slice(5))
console.log(str.includes("Self"))//gives true or false
console.log(str.split("M").join("m"))
console.log(str.repeat(2))
console.log(" Hello ".trim())
console.log(str.indexOf("M"))
console.log(str.lastIndexOf("i"))
console.log(str.slice(-3))
console.log(str.substring(1,7))
console.log(str.replaceAll("Udayani","Hasya"))
let str1="Hasya"
let str2="Nandhini"
console.log(str1.concat(str2))
console.log(str.search("Udayani"))
console.log(str.valueOf())


// copying of objects
//Normal Copy
let obj = {name: "udayani",empid: 56775,Bloodgroup: "b positive",Doj: "may",nested: { a: "Hello", b: "hai" } }
let obj1 = obj//By using Assignment Operator
obj1.salary = 76767//primitive
obj1.nested.c="Bye"//reference
console.log("obj1", obj1)
console.log("obj", obj)


///Shallow Copy
var original={one:"a",two:"b",three:"c",obj:{a:"Hello",b:"hai"}}
var copy={...original}//By Using the Spread Operator
copy.obj.a="good morning"//reference
original.k="bye"//primitive
copy.five="hii"//primitive
original.obj.f="good"//reference
console.log("copy",copy)
console.log("original",original)
//Copy-Primitive- print on only Copy
//     reference-print on copy,original
//Original-Primitive-Print on only original
//      Reference-print on copy,original


//Deep Copy
var copy1 = JSON.parse(JSON.stringify(original))
console.log("copy1", copy1)
original.nine = "goodbye"//primitive
copy1.obj.a = "hey"//reference
copy1.nine="html"//primitive
original.obj.eight="nine"//reference
console.log("copy1", copy1)
console.log("original", original)
//Copy-primitive- print on  only copy
//    reference- print on only copy
//Original-Primitive-print on only original
//        Reference- print on only original
