//array destructiong
let emp=["udayani",2,3,4]
console.log(emp[0])
let[A,B,C]=emp
console.log(emp)
console.log(A)
console.log(B)
console.log(C)

//arr destructing by using the nested
let employee = ["udayani",67,89,[78,90,56]]
let [a,b,c,[d,e,f]] = employee
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(f)
// let [x,y,z]=nested
// console.log(x)
// console.log(y)
// console.log(z)
//object destructuring
let obj={name:"udayani",role:"IT",salary:67888}
console.log(obj.name)
let {name,role,salary}=obj
console.log(name)
console.log(role)
console.log(salary)
//object destructuriong by using the nested
let emp1={name:"udayani",role:"IT",salary:67888,nested:{dept:"ase",company:"NYB"}}
let {nested}=emp1    
let {dept,company}=nested
console.log(dept)
console.log(company)



//iterators
let num=[1,2,3]
let k=num[Symbol.iterator]()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
//generators
function* hai(){
    yield "hello"
    yield"bye"
    yield"done"
}
let n=hai()
console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(n.next())