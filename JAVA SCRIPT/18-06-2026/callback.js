//Call back Functions:a functtion pass the arguements to the another function and it is excueted later
function function1(s) {
    console.log(s)
}
function one(a, b, c) {
    console.log("one is executed")
    c(a + b)
}

one(1, 2, function1)
//
//  def add(a, b, callback)
//     result = a + b
//     callback(result)
//  def display(result)
//     print("Result is:", result)

// add(10, 20, display)
function welcome(user, callback) {
    console.log("Welcome " + user);
    callback();
}

welcome("Alice", function () {
    console.log("Have a nice day!");
});
//
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("John", sayGoodbye);
//Anynomous function with using the call back
function one(a, b, c) {
    console.log("one is executed");
    c(a + b)
}

one(1, 2, function (s) {
    console.log(s)
})
// promise:A Promise is an object that tells us whether a task will be completed successfully or fail in the future.
let p = new Promise((resolve, reject) => {
    let status = true
    if (status) {
        console.log("resolved")
    }
    else {
        console.log("reject")
    }
})
p
    .then((a) => {
        console.log(a)//success
    })
    .catch((b) => {
        console.log(b)//failure
    })
//pending promise
let u = new Promise((resolve, reject) => {
    console.log("Promise started")

})
console.log(u)
// promise.all():is a method that takes an array of promises and waits for all of them to complete successfully.
let ab = Promise.resolve("Completed")
let ba = Promise.reject("Failure")
Promise.all([ab, ba])
    .then((a) => {
        console.log(a)
    })
    .catch((b) => {
        console.log(b)
    })

//promise.race():take the multiple promises and returns the result of the first promises the settles
// let pa=Promise.resolve("p1 done")
// let pb=Promise.reject("p2 done")
let pa = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("pa is done")

    }, 1000)
})
let pb = new Promise((resolve) => {
    setTimeout(() => {
        resolve("pb is done")
    }, 5000)
})
Promise.race([pa, pb])
    .then((uday) => {
        console.log(uday)
    })
    .catch((pa) => {
        console.log(pa)
    })

//promise.allsettle():waits for all promises to finish, no matter whether they succeed or fail.

//It gives the result of every promise with its status.
// let ac=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("failure")

//     },1000)
// })
// let bc=new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("sucsess")
//     },5000)
// })
Promise.allSettled([pa, pb])
    .then((uday) => {
        console.log(uday)
    })

//promise.any:it gives the first sucess promise as the output
let ar = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("ar is done")

    }, 1000)
})
let br = new Promise((resolve) => {
    setTimeout(() => {
        resolve("br is done")
    }, 1000)
})
Promise.any([ar, br])
    .then((a) => {
        console.log(a)
    })
//async&await:
//async:it is mainly used before the function,it automatically returns the promise.
//await:it makes js wait for the promise reult before moving to the nexttime. 
function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("Promise completed successfully");
    });
}

async function show() {
    let result = await myPromise();
    console.log(result);
}

show();