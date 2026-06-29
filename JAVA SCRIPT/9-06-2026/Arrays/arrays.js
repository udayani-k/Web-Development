//Removing Duplicates
var m=[1,2,1,2,3,4,3,4,6]
console.log(...new Set(m))
//removing the duplicates by using indexOf
var n=[]
for(i of m){
    if(n.indexOf(i)==-1){
        n.push(i)
}
}
console.log(m)
console.log(n)
//Map:creates the array by changing the each element of the given array
var array=[1,2,3,4,5]
console.log(array.map(i=>i*i))
console.log(array.map(i=>i+1))
//reduce:processes an array and return a single final result
var arr2=[2,3,4,5,6,7]
console.log(arr2.reduce((a,b)=>a+b,3))
console.log(arr2.reduce((a,b)=>a-b))
console.log(arr2.reduce((a,b)=>a/b))
console.log(arr2.reduce((a,b)=>a*b))
//checking the type of datatype
let arr9 =[1,2,3,4,5]
let b="hindu"
console.log(Array.isArray(arr9))
console.log(Array.isArray(b))
//filter:creates a new array which should be statisfy the given condition
let arr1 =[1,2,3,4,5]
console.log(arr1.filter( i=> i%2 == 0))
console.log(arr1.filter( i=>i>3))
//filter using the String datatye
let names = ["John", "Sara", "Mike", "Sama"];
console.log(names.filter(name => name.endsWith("a")));
//for each
arr1.forEach((i,j)=>{
    console.log(i,j)
})
//copying
   //spread opearator
   arr0=[1,2,3,4]
   arr7=[...arr0]
   console.log(arr7)
   //slice 
   let arr6 = [1,2,3]
   arr3= arr6.slice()
   console.log(arr3)
   //Array.from
   arr6=Array.from(arr6)
   console.log(arr6)