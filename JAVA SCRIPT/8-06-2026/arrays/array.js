//Arrays
var arr=["1",2,3,4]
console.log(arr)
arr.push=(5)
console.log(arr)
arr.splice(1, 0, "udayani")
console.log(arr)
arr.unshift(9)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.splice(3)
console.log(arr)
arr.splice(0,0,6)
console.log(arr)
arr.splice(0,1)
console.log(arr)
let array=[1,2,3,4,5]
console.log(array.length)
//index of
let num1=[3,4,5,6,7,8]
console.log(num1)
console.log(num1[2])
console.log(num1.indexOf(0))
//includes: results in boolean value
console.log(num1)
console.log(num1[2])
console.log(num1.includes(2))
//lastIndexOf
let num=[1,2,1,2,1,2,1]
console.log(num.lastIndexOf(1))
//splice
let num2=[1,2,6,7,8]
num2.splice(0,array.length)
console.log(num2)
num2.splice(0,num2.length)
console.log(num2)
console.log(num1.length)
num1.length=0
console.log(num1.length)
//empty array
let a=[3,4,5,6,7]
num=[]
console.log(num)
//concatenation
let c=[1,2,3,4]
let d=["a","b","c","d"]
console.log(c,d)
let e=c.concat(d)
console.log(e)
//spread operator
let arry = [1, 2, 3]
console.log(...arry)
//for of
let arrars = ["Apple", "Banana", "Orange", 30,70,80]

for (value of arrars) {
  console.log(value)
}
//for in

for (value in arrars) {
  console.log(value)
}
console.log(arrars.length)

//joins
let ar = ["Hello", 10, "World", 20]

 result = ar.join(" ")

console.log(result)
//loops forof

for(i of aray){
    console.log(i)
}
//Testing the Array_Some,Every:it works like as the Logic Gate like OR and also AND gate

console.log(aray.some(i => i>1))
console.log(aray.every(i => i>10))

//Ascending Order witout using the Sort function
let arr4 = [5, 2, 8, 1]

for (i = 0; i < arr4.length; i++)
  for ( j = i + 1; j < arr4.length; j++)
    if (arr4[i] < arr4[j])
      [arr4[i], arr4[j]] = [arr4[j], arr4[i]]

console.log(arr4)
//Descending Order without using the Sort function
let arr3=[1,4,6,7,8,3,10]
for(i=0; i<arr3.length; i++)
  for(j=i + 1; j<arr3.length; j++)
    if(arr3[i] > arr3[j])
      [arr3[i], arr3[j]] = [arr3[j], arr3[i]]

console.log(arr3)
//Flattening of array
let arr7 = [1, [2, 3], [4, 5]];
console.log(arr7.flat());
//sort(ascending order)
let v=[1,2,9,6,4,3]
v.sort((a,b)=>a-b)
console.log(v)
//sort(descending order)
v.sort((a,b)=>b-a)
console.log(v)
//ascending order using the indexof()
arr0 = [12,45,87,34,65,9]
order1 = arr0.slice().sort((a, b) => a- b)
arr0.sort((a, b) => order1.indexOf(a) - order1.indexOf(b))
console.log(arr0)
//descending order using the indexof()
arr5 = [12,45,87,34,65,9]
order4 = arr5.slice().sort((a, b) => b- a)
arr5.sort((a, b) => order4.indexOf(a) - order4.indexOf(b))
console.log(arr5)
