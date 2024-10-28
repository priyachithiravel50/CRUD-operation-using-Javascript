// //Login Page
// function login() {
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
//     console.log("Username:", username);
//     console.log("Password:", password);
  
//     // Display entered details
//     let outputText = `<h2>Details</h2>
//         <p>Username: ${username}</p>
//         <p>Password: ${password}</p>`;
//     document.getElementById('output').innerHTML = outputText;
//   }

// let entries = [];

// function MyButton(event) {
//     event.preventDefault();

//     let userName = document.getElementById('Username').value;
//     let password = document.getElementById('Password').value;

//     let nameError = document.getElementById('nameError');
//     let passwordError = document.getElementById('passwordError');

//     let valid = true;

//     // Username validation
//     if (userName.trim() === "") {
//         nameError.textContent = "Username is required*";
//         nameError.style.color = "red";
//         nameError.style.fontSize = "13px";
//         nameError.style.paddingLeft = "15px";
//         valid = false;
//     } else {
//         nameError.textContent = '';
//     }

//     // Password validation
//     if (password.trim() === "") {
//         passwordError.textContent = "Password is required*";
//         passwordError.style.color = "red";
//         passwordError.style.fontSize = "13px";
//         passwordError.style.paddingLeft = "15px";
//         valid = false;
//     } else {
//         passwordError.textContent = '';
//     }

//     // Add entry if valid
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
//                     <button onclick="editRow(${i})">Edit</button>
//                     <button onclick="deleteRow(${i})">Delete</button>
//                 </td>
//             </tr>
//         `;
//     }

//     tableBody.innerHTML = rowsHTML;
// }

// function editRow(index) {
//     document.getElementById("Username").value = entries[index].userName;
//     document.getElementById("Password").value = entries[index].password;

//     deleteRow(index); // Delete the current row for editing
// }

// function deleteRow(index) {
//     entries.splice(index, 1);
//     renderTable();
// }



let entries = [];

function MyButton(event) {
    event.preventDefault();

    // Fetching input values
    let userName = document.getElementById('usernameInput').value;
    let password = document.getElementById('passwordInput').value;

    // Error message elements
    let nameError = document.getElementById('usernameError');
    let passwordError = document.getElementById('passwordError');

    // Validation
    let valid = true;

    if (userName.trim() === "") {
        nameError.textContent = "Username is required*";
        nameError.style.color = "red";
        valid = false;
    } else {
        nameError.textContent = '';
    }

    if (password.trim() === "") {
        passwordError.textContent = "Password is required*";
        passwordError.style.color = "red";
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    // Add entry if valid
    if (valid) {
        entries.push({ userName, password });
        renderTable();
        document.getElementById('form').reset();
    }
}

function renderTable() {
    const tableBody = document.getElementById("tableBody");

    let rowsHTML = '';
    for (let i = 0; i < entries.length; i++) {
        rowsHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${entries[i].userName}</td>
                <td>${entries[i].password}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editRow(${i})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteRow(${i})">Delete</button>
                </td>
            </tr>
        `;
    }
    tableBody.innerHTML = rowsHTML;
}

function editRow(index) {
    // Populate fields with existing data
    document.getElementById("usernameInput").value = entries[index].userName;
    document.getElementById("passwordInput").value = entries[index].password;

    // Delete the entry after editing
    deleteRow(index);
}

function deleteRow(index) {
    entries.splice(index, 1);
    renderTable();
}
