const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('Введите Ваш логин');

const isLoginValid = function(login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;
    } else {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
        return false;
    }
}

const isLoginUnique = function(allLogins, login) {
    if (allLogins.includes(login)) {
        alert('Такой логин уже используется!');
        return false;
    } else {
        return true;
    }
}

const addLogin = function(allLogins, login) {
    if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
        allLogins.push(login);
        alert('Логин успешно добавлен');
    }
}
addLogin(allLogins, login);
console.log(allLogins);