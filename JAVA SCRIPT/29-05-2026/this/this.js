//this keyword
console.log(this)
function hello(){
    console.log(this)
}
hello()
let ar=()=>{
    console.log(this)
}
ar()
let obj={
    name:"udayani",
    hello1:()=>{
        console.log(this)
    },
    hello(){
        console.log(this)
    },
}
   obj.hello()
   obj.hello1()