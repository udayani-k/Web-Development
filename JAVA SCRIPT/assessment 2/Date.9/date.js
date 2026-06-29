// console.log(new Date())


// //
// //let text=document.getElementById("enter the text")
// let text=btn.createElement("enter the text")
// text.innertext="please enter a value"
// console.log(text)
// //
// btn.addEventListener("click")
// btn.innertext="entered text"
// console.log(btn)



    function showText() {
      let input = document.getElementById("textInput")
      let heading = document.getElementById("heading")

      if (input === "") {
        heading.innerText = "Please Enter a Value";
      } else {
        heading.innerText = input
      }
    }

