const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('Введите Ваш логин');

const isLoginValid = function(login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;
    } else {
        // alert('Логин должен состоять от 4 до 16 символов');
        return false;
    }
}

const isLoginUnique = function(allLogins, login) {
    if (allLogins.includes(login)) {
        // alert('Такой логин уже есть');
        return false;
    } else {
        return true;
    }
}

const addLogin = function(allLogins, login) {
    if (!isLoginValid(login)) {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
    } else if (!isLoginUnique(allLogins, login)) {
        alert('Такой логин уже используется!');
    } else {
        allLogins.push(login);
        alert('Логин успешно добавлен');
    }
};

// alert(addLogin(allLogins, login));
console.log(addLogin(allLogins, login));
// console.log(allLogins);