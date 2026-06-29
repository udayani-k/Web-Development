// //1. Change Text
// let btn = document.getElementById("btn");
// let title = document.getElementById("title");

// btn.addEventListener("click", function () {
//     title.textContent = "Welcome";
// });
// //2.Change Background Color



// btn.addEventListener("click", function () {
//     document.body.style.backgroundColor = "lightblue";
// });
// //3. Counter App
// let count0 = 0;

// document.getElementById("inc").addEventListener("click", function () {
//     count0++;
//     document.getElementById("result").textContent = count0;
// });
// //4. Show / Hide Password
// let vcn = document.getElementById("show");
// let pwd = document.getElementById("password");

// vcn.addEventListener("click", function () {
//     if (pwd.type === "password") {
//         pwd.type = "text";
//     } else {
//         pwd.type = "password";
//     }
// });
// //5. Character Counter
// let input = document.getElementById("text");
// let count = document.getElementById("count");

// input.addEventListener("input", function () {
//     count.textContent = input.value.length;
// });
// //6. Add Item to List
// let ict = document.getElementById("add");
// let input = document.getElementById("task");
// let list = document.getElementById("list");

// ict.addEventListener("click", function () {
//     let li = document.createElement("li");
//     li.textContent = input.value;
//     list.appendChild(li);
// });
// //7. Delete Item
// list.addEventListener("click", function (e) {
//     e.target.remove();
// });

// //Clicking any list item removes it.

// //8. Event Delegation

// let list = document.getElementById("list");

// list.addEventListener("click", function (e) {
//     console.log(e.target.textContent);
// });
// //9. Event Bubbling

// child.addEventListener("click", function () {
//     console.log("Child clicked");
// });

// parent.addEventListener("click", function () {
//     console.log("Parent clicked");
// });

// //Clicking child prints:

// //Child clicked
// //Parent clicked
// //10. Create Element Dynamically

// let p = document.createElement("p");

// p.textContent = "New Paragraph";

// document.body.appendChild(p);
// //11. Remove Element
// document.getElementById("box").remove();
// //12. Form Validation

// let form = document.getElementById("form");

// form.addEventListener("submit", function (e) {

//     let name = document.getElementById("name").value;

//     if (name === "") {
//         e.preventDefault();
//         alert("Name is required");
//     }
// });
// //13. Dark Mode

// let udt = document.getElementById("dark");

// udt.addEventListener("click", function () {
//     document.body.classList.toggle("dark");
// });
// //14. Debouncing
// let timer;

// input.addEventListener("input", function () {

//     clearTimeout(timer);

//     timer = setTimeout(function () {
//         console.log("Search executed");
//     }, 1000);

// });
// //15. Throttling

// let lastClick = 0;

// button.addEventListener("click", function () {

//     let now = Date.now();

//     if (now - lastClick > 2000) {
//         console.log("Executed");
//         lastClick = now;
//     }

// });
// //16. Image Change
// let img = document.getElementById("image");

// img.src = "newimage.jpg";
// //17. Mouse Events

// box.addEventListener("mouseover", function () {
//     console.log("Mouse entered");
// });
// //18. Keyboard Event
// input.addEventListener("keydown", function (e) {
//     console.log(e.key);
// });
// //19. Stopwatch (Basic)
// let count1 = 0;

// setInterval(function () {
//     count++;
//     console.log(count1);
// }, 1000);
// //20. Toggle Visibility
// btn.addEventListener("click", function () {

//     if (box.style.display === "none") {
//         box.style.display = "block";
//     } else {
//         box.style.display = "none";
//     }

// });
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let colors = ["red", "green", "blue", "yellow", "pink"];
    let randomIndex = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomIndex];
});





// 1. Even or Odd Number
// let num = 10;if (num % 2 === 0) {    console.log("Even");} else {    console.log("Odd");}

// 2. Largest of Three Numbers
// let a = 10, b = 25, c = 15;if (a >= b && a >= c) {    console.log(a);} else if (b >= a && b >= c) {    console.log(b);} else {    console.log(c);}

// 3. Leap Year
// let year = 2024;if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {    console.log("Leap Year");} else {    console.log("Not Leap Year");}

// 4. Factorial Using Loop
// let n = 5;let fact = 1;for (let i = 1; i <= n; i++) {    fact *= i;}console.log(fact);

// 5. Factorial Using Recursion
// function factorial(n) {    if (n === 0 || n === 1) {        return 1;    }    return n * factorial(n - 1);}console.log(factorial(5));

// 6. Fibonacci Series
// let n = 10;let a = 0, b = 1;for (let i = 0; i < n; i++) {    console.log(a);    let temp = a + b;    a = b;    b = temp;}

// 7. Reverse a String
// let str = "javascript";let reversed = str.split("").reverse().join("");console.log(reversed);

// 8. Palindrome String
// let str = "madam";let reversed = str.split("").reverse().join("");if (str === reversed) {    console.log("Palindrome");} else {    console.log("Not Palindrome");}

// 9. Count Vowels
// let str = "javascript";let count = 0;for (let ch of str.toLowerCase()) {    if ("aeiou".includes(ch)) {        count++;    }}console.log(count);

// 10. Reverse a Number
// let num = 12345;let reverse = 0;while (num > 0) {    let digit = num % 10;    reverse = reverse * 10 + digit;    num = Math.floor(num / 10);}console.log(reverse);

// 11. Check Palindrome Number
// let num = 121;let original = num;let reverse = 0;while (num > 0) {    let digit = num % 10;    reverse = reverse * 10 + digit;    num = Math.floor(num / 10);}if (original === reverse) {    console.log("Palindrome");} else {    console.log("Not Palindrome");}

// 12. Largest Element in Array
// let arr = [10, 5, 80, 25, 40];let largest = arr[0];for (let num of arr) {    if (num > largest) {        largest = num;    }}console.log(largest);

// 13. Smallest Element in Array
// let arr = [10, 5, 80, 25, 40];let smallest = arr[0];for (let num of arr) {    if (num < smallest) {        smallest = num;    }}console.log(smallest);

// 14. Sum of Array Elements
// let arr = [10, 20, 30, 40];let sum = 0;for (let num of arr) {    sum += num;}console.log(sum);

// 15. Remove Duplicates from Array
// let arr = [1, 2, 2, 3, 4, 4, 5];let unique = [...new Set(arr)];console.log(unique);

// 16. Merge Two Arrays
// let arr1 = [1, 2, 3];let arr2 = [4, 5, 6];let merged = [...arr1, ...arr2];console.log(merged);

// 17. Sort Array Ascending
// let arr = [5, 2, 8, 1, 3];arr.sort((a, b) => a - b);console.log(arr);

// 18. Sort Array Descending
// let arr = [5, 2, 8, 1, 3];arr.sort((a, b) => b - a);console.log(arr);

// 19. Count Occurrences in Array
// let arr = [1, 2, 3, 2, 2, 4];let target = 2;let count = 0;for (let num of arr) {    if (num === target) {        count++;    }}console.log(count);

// 20. Object Creation
// let student = {    name: "Ravi",    age: 22,    course: "JavaScript"};console.log(student.name);console.log(student.age);

// 21. Class and Constructor
// class Student {    constructor(name, age) {        this.name = name;        this.age = age;    }    display() {        console.log(this.name, this.age);    }}let s1 = new Student("Ravi", 22);s1.display();

// 22. Copy Array
// let arr1 = [1, 2, 3];let arr2 = [...arr1];console.log(arr2);

// 23. Copy Object
// let obj1 = {    name: "John",    age: 25};let obj2 = { ...obj1 };console.log(obj2);

// 24. Create DOM Element
// <div id="container"></div><script>const p = document.createElement("p");p.innerText = "Hello JavaScript";document.getElementById("container").appendChild(p);</script>

// 25. Change Text Using DOM
// <p id="demo">Old Text</p><script>document.getElementById("demo").innerText = "New Text";</script>

// 26. Button Click Event
// <button id="btn">Click Me</button><script>document.getElementById("btn").addEventListener("click", function () {    alert("Button Clicked");});</script>

// 27. Counter Application
// <button id="inc">+</button><h1 id="count">0</h1><script>let count = 0;document.getElementById("inc").addEventListener("click", () => {    count++;    document.getElementById("count").innerText = count;});</script>

// 28. Show / Hide Password
// <input type="password" id="pwd"><button id="toggle">Show</button><script>document.getElementById("toggle").addEventListener("click", () => {    let pwd = document.getElementById("pwd");    if (pwd.type === "password") {        pwd.type = "text";    } else {        pwd.type = "password";    }});</script>

// 29. Print Numbers 1 to 100
// for (let i = 1; i <= 100; i++) {    console.log(i);}

// 30. Print Even Numbers 1 to 100
// for (let i = 2; i <= 100; i += 2)
//  {    console.log(i);
//}


let str = "reverse";

if (str === str.split("").reverse("").join("")) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// 1. Factorial Using Recursion
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // 120
// How it works
// factorial(5)
// = 5 * factorial(4)
// = 5 * 4 * factorial(3)
// = 5 * 4 * 3 * factorial(2)
// = 5 * 4 * 3 * 2 * factorial(1)
// = 120
// 2. Fibonacci Using Recursion
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(6)); // 8

// Sequence:

// 0 1 1 2 3 5 8
// 3. Sum of Numbers Using Recursion
// function sum(n) {
//     if (n === 1) {
//         return 1;
//     }

//     return n + sum(n - 1);
// }

// console.log(sum(5)); // 15

// Calculation:

// 5 + 4 + 3 + 2 + 1 = 15
// 4. Reverse String Using Recursion
// function reverseString(str) {
//     if (str === "") {
//         return "";
//     }

//     return reverseString(str.slice(1)) + str[0];
// }

// console.log(reverseString("hello"));

// Output:

// olleh
// 5. Power of a Number Using Recursion
// function power(base, exponent) {
//     if (exponent === 0) {
//         return 1;
//     }

//     return base * power(base, exponent - 1);
// }

// console.log(power(2, 3)); // 8
// Function Currying in JavaScript

// Currying means converting a function with multiple arguments into a sequence of functions, each taking one argument.

// 1. Simple Currying Example

// Without currying:

// function add(a, b) {
//     return a + b;
// }

// console.log(add(10, 20));

// With currying:

// function add(a) {
//     return function (b) {
//         return a + b;
//     };
// }

// console.log(add(10)(20));

// Output:

// 30
// 2. Currying with Arrow Functions
// const add = a => b => a + b;

// console.log(add(10)(20));

// Output:

// 30
// 3. Multiplication Using Currying
// function multiply(a) {
//     return function (b) {
//         return a * b;
//     };
// }

// console.log(multiply(5)(4));

// Output:

// 20
// 4. Three Parameters Currying
// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// }

// console.log(add(10)(20)(30));

// Output:

// 60
// 5. Real Interview Example
// function greet(greeting) {
//     return function(name) {
//         return greeting + " " + name;
//     };
// }

// const sayHello = greet("Hello");

// console.log(sayHello("John"));
// console.log(sayHello("David"));

// Output:

// Hello John
// Hello David