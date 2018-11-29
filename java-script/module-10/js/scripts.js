const inputId = document.querySelector("#id");
const inputName = document.querySelector("#name");
const inputAge = document.querySelector("#age");
const btnGetAll = document.querySelector(".get-all");
const btnAddUser = document.querySelector(".add-user");
const btnGetById = document.querySelector(".find-user");
const btnRemuveUser = document.querySelector(".delete-user");
const btnUpdateUser = document.querySelector(".update-user");
const apiUrl = "https://test-users-api.herokuapp.com/users/";
const table = document.querySelector("table");
const tBody = document.querySelector("table > tbody");
const btnClearTable = document.querySelector(".clear-table");

btnGetAll.addEventListener("click", getAllUsers);
btnAddUser.addEventListener("click", addUser);
btnGetById.addEventListener("click", getUserById);
btnRemuveUser.addEventListener("click", removeUser);
btnUpdateUser.addEventListener("click", updateUser);

function getAllUsers() {
    fetch(apiUrl)
        .then(responseHandle)
        .then(allUsersDataHandle)
        .catch(error => {
            console.log("error")
        });
    table.removeAttribute("hidden");
    inputName.value = "";
    inputAge.value = "";
    inputId.value = "";
    inputId.removeAttribute("required", required = "required");
    inputName.removeAttribute("required", required = "required");
    inputAge.removeAttribute("required", required = "required");
}

function responseHandle(response) {
    if (response.ok) { return response.json() };
};

function allUsersDataHandle(obj) {
    const htmlString = obj.data.reduce((acc, user) => acc + createAllUsersTableRow(user),
        "");
    tBody.innerHTML = htmlString;
};

function createAllUsersTableRow({ name, id, age }) {
    return `
    <tr>
         <td>${name}</td>
         <td>${id}</td>
         <td>${age}</td>
    </tr>`;
};

function getUserById(evt) {
    evt.preventDefault();
    const fullApiUrl = apiUrl + inputId.value;
    if (inputId.value != "") {
        inputId.removeAttribute("required", required = "required");
        inputName.removeAttribute("required", required = "required");
        inputAge.removeAttribute("required", required = "required");
        fetch(fullApiUrl)
            .then(responseHandle)
            .then(findUserDataHandle)
            .catch(error => {
                alert("Пользователь с таким ID не найден");
            });
    } else {
        inputName.removeAttribute("required", required = "required");
        inputAge.removeAttribute("required", required = "required");
        inputId.setAttribute("required", required = "required");
        alert("Введите ID пользователя")
    }
    inputId.value = "";
    inputName.value = "";
    inputAge.value = "";
}

function findUserDataHandle(obj) {
    tBody.innerHTML = `
    <tr>
         <td>${obj.data.name}</td>
         <td>${obj.data.id}</td>
         <td>${obj.data.age}</td>
    </tr>`;
};

function removeUser(evt) {
    evt.preventDefault();
    const fullApiUrl = apiUrl + inputId.value;
    if (inputId.value != "") {
        inputId.removeAttribute("required", required = "required");
        inputName.removeAttribute("required", required = "required");
        inputAge.removeAttribute("required", required = "required");
        fetch(fullApiUrl, { method: "DELETE" })
            .then(() => {
                getAllUsers();
                alert("Пользователь успешно удален")
            })
            .catch(error => {
                alert("Пользователь с таким ID не найден");
            });
    } else {
        inputName.removeAttribute("required", required = "required");
        inputAge.removeAttribute("required", required = "required");
        inputId.setAttribute("required", required = "required");
        alert("Введите ID пользователя")
    }
    inputId.value = "";
    inputName.value = "";
    inputAge.value = "";
}

function addUser(evt) {
    evt.preventDefault();
    if (inputName.value != "" & inputAge.value != "") {
        inputId.removeAttribute("required", required = "required");
        inputName.removeAttribute("required", required = "required");
        inputAge.removeAttribute("required", required = "required");
        fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify({ name: inputName.value, age: inputAge.value }),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            .then(() => {
                getAllUsers();
                alert(`Пользователь успешно добавлен`)
            })
            .catch(error => {
                console.log("error");
            });
    } else {
        inputId.removeAttribute("required", required = "required");
        inputName.setAttribute("required", required = "required");
        inputAge.setAttribute("required", required = "required");
        alert("Неверно указаны данные")
    }
    inputName.value = "";
    inputAge.value = "";
    inputId.value = "";
};

function updateUser(evt) {
    evt.preventDefault();
    const fullApiUrl = apiUrl + inputId.value;
    if (inputName.value != "" & inputAge.value != "" & inputId.value != "") {
        inputName.removeAttribute("required", required = "required");
        inputAge.removeAttribute("required", required = "required");
        inputId.removeAttribute("required", required = "required");
        fetch(fullApiUrl, {
                method: "PUT",
                body: JSON.stringify({ name: inputName.value, age: inputAge.value }),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
            .then(updateUserResponseHandle)
            .catch(error => {
                console.log("error");
            });
    } else {
        inputId.removeAttribute("required", required = "required");
        inputName.setAttribute("required", required = "required");
        inputAge.setAttribute("required", required = "required");
        alert("Неверно указаны данные")
    }
    inputName.value = "";
    inputAge.value = "";
    inputId.value = "";
};

function updateUserResponseHandle(response) {
    if (response.ok) {
        alert("Данные пользователя успешно обновлены");
        // getAllUsers();
        findUserDataHandle();
    }
};