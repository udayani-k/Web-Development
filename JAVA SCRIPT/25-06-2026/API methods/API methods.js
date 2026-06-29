//get method
let data={name:"udayani"}
fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    return data.json()
})
.then((d)=>{
    data= d;
    console.log((d))})
.catch((e)=>{
    console.log(e)
})
console.log(data)
// //post method
// fetch("https://jsonplaceholder.typicode.com/users",{
//      method:"POST",
//      body:json.stringify({...data})
//     headers{
//         "content-type":
//     }


// // })

// const fetchBtn = document.getElementById("fetchBtn");
// const clearBtn = document.getElementById("clearBtn");
// const container = document.getElementById("container");

// let usersData = [];

// fetchBtn.addEventListener("click", fetchUsers);

// function fetchUsers() {

//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((data) => {

//             usersData = data;

//             displayUsers();
//         })
//         .catch((error) => {
//             console.log(error);
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
// }

// clearBtn.addEventListener("click", () => {
//     container.innerHTML = "";
//     usersData = [];
// })


const getBtn = document.getElementById("getBtn");
const container = document.getElementById("container");

let usersData = [];

getBtn.addEventListener("click", getUsers);

function getUsers() {

    container.innerHTML = "<h3>Loading...</h3>";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {

            usersData = data;

            setTimeout(() => {
                displayUsers();
            }, 2000); // wait 2 seconds
        })
        .catch((error) => {
            console.log(error);
        });
}

function displayUsers() {

    container.innerHTML = "";

    usersData.forEach((user) => {

        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Address: ${user.address.street}, ${user.address.city}</p>
            <p>Geo: ${user.address.geo.lat}, ${user.address.geo.lng}</p>
            <hr>
        `;

        container.appendChild(card);
    });

    const clearBtn = document.createElement("button");

    clearBtn.textContent = "Clear Data";

    clearBtn.addEventListener("click", () => {
        container.innerHTML = "";
        usersData = [];
    });

    container.appendChild(clearBtn);
}


