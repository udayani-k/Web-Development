try{
    //console.log(hai)
    throw("udayani")
}
catch(error){
    console.log(error)
    console.log("Error occured")
}
console.log("bye")
//
try {
    console.log("Hello");
    console.log("hiii")
    //console.log(x);
    throw("udayani")

}
catch (error) {
    console.log("Error caught:");
    console.log(error);
}
//
let age = 15;

try {
    if (age < 18) {
        throw("Not eligible for voting");
    }

    console.log("Eligible");
}
catch (error) {
    console.log("eliible for vote");
}


