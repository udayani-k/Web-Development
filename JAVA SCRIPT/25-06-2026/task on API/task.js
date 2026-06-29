const getBtn = document.getElementById("getBtn")//selects the button from HTML with id getBtn
const container = document.getElementById("container")//selects the div where user data will be shown

let usersData = []//This is an empty array

getBtn.addEventListener("click", getUsers)//When the button is clicked

function getUsers() {//This function runs when button is clicked

    container.innerHTML = "<h3>Loading...</h3>";//Clears previous conten

    fetch("https://jsonplaceholder.typicode.com/users")//Sends a request to a fake AP
        .then((response) => response.json())//The response is not usable directly
        .then((data) => {//Now we get the actual user data here

            usersData = data;//Save API data into usersData arra

            setTimeout(() => {//Waits 2 seconds before showing users
                displayUsers();
            }, 2000); // wait 2 seconds
        })
        .catch((error) => {//If API fails
            console.log(error);//It prints error in console
        });
}

function displayUsers() {//This function shows users on scree

    container.innerHTML = "";//Removes loading text or old content

    usersData.forEach((user) => {//Goes through each user in the array
//One by one

        const card = document.createElement("div");//Creates a new HTML div for each use

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Address: ${user.address.street}, ${user.address.city}</p>
            <p>Geo: ${user.address.geo.lat}, ${user.address.geo.lng}</p>
            <hr>
        `;

        container.appendChild(card);//Adds each user card into the container div
    });

    const clearBtn = document.createElement("button");//Creates a new button dynamically

    clearBtn.textContent = "Clear Data";//Button shows "Clear Data

    clearBtn.addEventListener("click", () => {//Clears all user data from screen
//Empties the usersData array
        container.innerHTML = "";
        usersData = [];
    });

    container.appendChild(clearBtn);//Displays the Clear button below user list
}



// const getBtn = document.getElementById("getBtn");
// const container = document.getElementById("container");

// let usersData = [];

// getBtn.addEventListener("click", getUsers);

// function getUsers() {
//     container.innerHTML = "<h3>Loading...</h3>";

//     axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {

//             usersData = response.data;

//             setTimeout(() => {
//                 displayUsers();
//             }, 2000);

//         })
//         .catch((error) => {
//             console.log(error);
//             container.innerHTML = "<h3>Failed to load data</h3>";
//         });
// }

// function displayUsers() {

//     container.innerHTML = "";

//     usersData.forEach((user) => {

//         const card = document.createElement("div");

//         card.innerHTML = `
//             <h3>${user.name}</h3>
//             <p>Email: ${user.email}</p>
//             <p>Phone: ${user.phone}</p>
//             <p>Address: ${user.address.street}, ${user.address.city}</p>
//             <p>Geo: ${user.address.geo.lat}, ${user.address.geo.lng}</p>
//             <hr>
//         `;

//         container.appendChild(card);
//     });

//     const clearBtn = document.createElement("button");

//     clearBtn.textContent = "Clear Data";

//     clearBtn.addEventListener("click", () => {
//         container.innerHTML = "";
//         usersData = [];
//     });

//     container.appendChild(clearBtn);
// }

