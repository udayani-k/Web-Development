function showDetails(a, b) {
    console.log(this.name);
    console.log(a, b);
}

const person = {
    
    name: "Udayani"
};

console.log("---- call ----");
showDetails.call(person, 10, 20);

console.log("---- apply ----");
showDetails.apply(person, [30, 40]);

console.log("---- bind ----");
const boundFunc = showDetails.bind(person, 50, 60);
boundFunc();