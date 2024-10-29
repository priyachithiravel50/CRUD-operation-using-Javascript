// // //Login Page
// // function login() {
// //     let username = document.getElementById('username').value;
// //     let password = document.getElementById('password').value;
// //     console.log("Username:", username);
// //     console.log("Password:", password);
  
// //     // Display entered details
// //     let outputText = `<h2>Details</h2>
// //         <p>Username: ${username}</p>
// //         <p>Password: ${password}</p>`;
// //     document.getElementById('output').innerHTML = outputText;
// //   }


// let entries = [];

// function Click(event) {
//     event.preventDefault();

//     let userName = document.getElementById('Username').value;
//     let password = document.getElementById('Password').value;

//     let nameError = document.getElementById('nameError');
//     let passwordError = document.getElementById('passwordError');

   
//     let valid = true;

//     if (userName.trim() === "") {
//         nameError.textContent = "Username is required*";
//         nameError.style.color = "red";
//         nameError.style.fontSize = "13px";
//         nameError.style.paddingLeft = "15px";
//         valid = false;
//     } else {
//         nameError.textContent = '';
//     }

//     if (password.trim() === "") {
//         passwordError.textContent = "Password is required*";
//         passwordError.style.color = "red";
//         passwordError.style.fontSize = "13px";
//         passwordError.style.paddingLeft = "15px";
//         valid = false;
//     } else {
//         passwordError.textContent = '';
//     }


//     if (valid) {
//         entries.push({ userName, password });
//         renderTable();
//         document.getElementById('form').reset();
//     }
// }

// function renderTable() {
//     const tableBody = document.getElementById("table-body");

//     let rowsHTML = '';
//     for (let i = 0; i < entries.length; i++) {
//         rowsHTML += `
//             <tr>
//                 <td>${i + 1}</td>
//                 <td>${entries[i].userName}</td>
//                 <td>${entries[i].password}</td>
//                 <td>
//                     <button style="background-color: Green;font-size:18px; padding:5px 5px; border-radius:5px;"  onclick="editRow(${i}) ">Edit</button>
//                     <button style="background-color:red;font-size:18px; padding:5px 5px; border-radius:8px;"   onclick="deleteRow(${i})">Delete</button>
//                 </td>
//             </tr>
//         `;
//     }

//     tableBody.innerHTML = rowsHTML;
// }

// function editRow(index) {
//     document.getElementById("Username").value = entries[index].userName;
//     document.getElementById("Password").value = entries[index].password;

//     deleteRow(index); 
// }

// function deleteRow(index) {
//     entries.splice(index, 1); 
//     renderTable(); 
// }







//CRUD OPERATION USING LOCAL STORAGE
let entries = JSON.parse(localStorage.getItem("entries")) || [];  

// Load and render table from local storage on page load
window.onload = () => {
    renderTable();
};

// Click function to add new entry
function Click(event) {
    event.preventDefault();

    let userName = document.getElementById('Username').value;
    let password = document.getElementById('Password').value;

    let nameError = document.getElementById('nameError');
    let passwordError = document.getElementById('passwordError');

    let valid = true;

    if (userName.trim() === "") {
        nameError.textContent = "Username is required*";
        nameError.style.color = "red";
        nameError.style.fontSize = "13px";
        nameError.style.paddingLeft = "15px";
        valid = false;
    } else {
        nameError.textContent = '';
    }

    if (password.trim() === "") {
        passwordError.textContent = "Password is required*";
        passwordError.style.color = "red";
        passwordError.style.fontSize = "13px";
        passwordError.style.paddingLeft = "15px";
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (valid) {
        entries.push({ userName, password });
        saveToLocalStorage(); 
        renderTable();  
        document.getElementById('form').reset();
    }
}

// Function to render the table
function renderTable() {
    const tableBody = document.getElementById("table-body");

    let rowsHTML = '';
    for (let i = 0; i < entries.length; i++) {
        rowsHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${entries[i].userName}</td>
                <td>${entries[i].password}</td>
                <td>
                    <button style="background-color: Green;font-size:18px; padding:5px 5px; border-radius:5px;" onclick="editRow(${i})">Edit</button>
                    <button style="background-color:red;font-size:18px; padding:5px 5px; border-radius:8px;" onclick="deleteRow(${i})">Delete</button>
                </td>
            </tr>
        `;
    }

    tableBody.innerHTML = rowsHTML;
}

// Function to edit an entry
function editRow(index) {
    document.getElementById("Username").value = entries[index].userName;
    document.getElementById("Password").value = entries[index].password;

    deleteRow(index);  
}

// Function to delete an entry
function deleteRow(index) {
    entries.splice(index, 1);  
    saveToLocalStorage();
    renderTable();  
}

// Function to save entries array to local storage
function saveToLocalStorage() {
    localStorage.setItem("entries", JSON.stringify(entries)); 
}


