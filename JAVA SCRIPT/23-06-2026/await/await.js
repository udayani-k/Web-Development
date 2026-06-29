// async and await
//used to handle Promises in a simple and readable way

function hai(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("done")
        },1000)
    })
}
async function hello1(){
    return await hai()
}
let s= hello1()
console.log(s)


//async using promise.all()
//waits for all promises to complete and returns all results together

function user(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("user data")
        },2000)
    })
}
function post(){
    return new Promise((reject) => {
        setInterval(() => {
            reject("post data")
        },3000)
    })
}
async function main(){
let result = await Promise.all([user(),post()

])
console.log(result)
}
main()


//async using promise.race()
//returns the result of the first promise that completes

function fast(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("fast task")
        },2000)
    })
}
function slow(){
    return new Promise((resolve) =>{
        setTimeout(() => {
         resolve("slow task")   
        },3000);
    })
}
async function main1(){
    let result1 = await Promise.race([fast(),slow()])
console.log(result1)
    }
main1()


//async using promise.allsettled()
//returns the status of all promises whether success or failure

function task1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("success")
        },2000)
    })
}
function task2(){
    return new Promise((reject) => {
        setTimeout(() => {
            reject("fail")
        },3000)
    })
}
async function main2(){
    let result3 = await Promise.allSettled([task1(),task2()])
    console.log(result3)
}
main2()


//async using promise.any()
// returns the first successful promise result

function task3(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("completed")
        },3000)
    })
}
function task4(){
    return new Promise((reject) =>{
        setTimeout(() =>{
            reject("not completed")
        },1000)
    })
}
async function main5(){
    let result4 = await Promise.any([task3(),task4()])
    console.log(result4)
}
main5()