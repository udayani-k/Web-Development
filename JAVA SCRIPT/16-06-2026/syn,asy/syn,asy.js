console.log("one")
console.log("two")
console.log("three")

//setTimeout()
console.log("one")
setTimeout(()=>{
    console.log("two")
},1000)
console.log("three")
//setInterval
 let a=setInterval(()=>{
    console.log("five")
},1000)
//clearInterval
setInterval(()=>{
    clearInterval(a)
},5000)

// //clearTimeout
// clearInterval(()=>{
//     setInterval(a)
// },1000)

//print hello world two times
 // using loop

//  for(i=0;i<=2;i++){
//     console.log("Hello World")
//  }




// let a1 = setInterval( () =>
// {
//     console.log("Hello World")
// },1000)

// setTimeout ( () =>
// {
//     clearInterval(a1)
// },1000)

//clear Timeout
let timer = setInterval(() => {
    console.log("Message sent");
}, 5000);
console.log("nine")

// clearTimeout(timer);


// ////
// console.log(document)
// setTimeout(()=>{
//     document.getElementById("msg").innerText="Hello print after 3 seconds"
// },3000)



