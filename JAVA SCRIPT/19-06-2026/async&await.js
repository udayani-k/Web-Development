//Basic async/await
async function hello() {
    return "Hello World";
}

hello().then((result) => {
    console.log(result);
});


//async/await with Promise
function task() {
    return new Promise((resolve) => {
        resolve("Task Done");
    });
}

async function run() {
    let result = await task();
    console.log(result);
}

run();

//async/await with delay
function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done after 2 seconds");
        }, 2000);
    });
}

async function show() {
    console.log("Start");

    let result = await delay();
    console.log(result);

    console.log("End");
}

show();