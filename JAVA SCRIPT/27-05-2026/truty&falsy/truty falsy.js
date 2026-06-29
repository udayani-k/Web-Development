function checkEligibility(age) {
    if (age >= 18) {
        console.log("eligible for vote");
    } else {
        console.log("not eligible for vote");
    }
}

let age = 16;
checkEligibility(age);

// function to check truthy/falsy
function check(value) {
    if (value) {
        console.log(value, "=> truthy value");
    } else {
        console.log(value, "=> falsy value");
    }
}

// checking truthy and falsy values

check(true);
check(-0);
check(0);
check(false);
check(0n);
check(NaN);
check("hi");
check(null);
check(undefined);
check("");
check([]);
check("false");
check({});
check(new Date());
check("0");
check("hello");
check(1);