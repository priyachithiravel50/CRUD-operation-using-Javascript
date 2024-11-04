function validateForm() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("ageError").innerText = "";
    document.querySelector(".emailError").innerText = "";
    document.querySelector(".passwordError").innerText = "";

    let name = document.getElementById("name").value;
    let age = document.getElementById("Age").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required!";
        isValid = false;
      
    }

    if (age === "") {
        document.getElementById("ageError").innerText = "Age is required!";
        isValid = false;
    } else if (age < 1) {
        document.getElementById("ageError").innerText = "Age must be greater than zero";
        isValid = false;
    }

    if (email === "") {
        document.querySelector(".emailError").innerText = "Email is required!";
        isValid = false;
    } else if (!email.includes("@")) {
        document.querySelector(".emailError").innerText = "Invalid email address";
        isValid = false;
    }

    if (password === "") {
        document.querySelector(".passwordError").innerText = "Password is required!";
        isValid = false;
    }

    return isValid;
}

// Function to display data from local storage in the table
function showData() {
    let peopleList = JSON.parse(localStorage.getItem("peopleList")) || [];
    let html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.password + "</td>";
        html += `<td>
                    <button onclick="editData(${index})" class="btn btn-success m-2">Edit</button>
                    <button onclick="deleteData(${index})" class="btn btn-danger">Delete</button>
                 </td>`;
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

// Load data when the page loads
window.onload = showData;

// Function to add new data
function AddData() {
    if (validateForm()) {
        let name = document.getElementById("name").value;
        let age = document.getElementById("Age").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let peopleList = JSON.parse(localStorage.getItem("peopleList")) || [];

        peopleList.push({
            name: name,
            age: age,
            email: email,
            password: password
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();

        // Clear form inputs
        document.getElementById("name").value = "";
        document.getElementById("Age").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
}

// Function to delete data 
function deleteData(index) {
    let peopleList = JSON.parse(localStorage.getItem("peopleList"));
    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
}

// Function to edit data 
function editData(index) {
    let peopleList = JSON.parse(localStorage.getItem("peopleList"));
    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("Age").value = peopleList[index].age;
    document.getElementById("email").value = peopleList[index].email;
    document.getElementById("password").value = peopleList[index].password;

    deleteData(index); // Delete the old entry 
}