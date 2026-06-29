const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

submitBtn.addEventListener("click", () => {

    try {
        let name = nameInput.value;

       //checks the validation
        if (name === "") {
            throw("Name cannot be empty");
        }

        if (name.length < 3) {
            throw("Name must be at least 3 characters");
        }

        // If no error
        message.style.color = "green";
        message.textContent = "Success: Name accepted ✔";

    }

    catch (error) {
        console.log(error);

        message.style.color = "red";
        message.textContent = "Error: " + error;
    }

});