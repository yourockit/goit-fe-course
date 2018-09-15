const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('Введите Ваш логин');

const isLoginValid = (login) => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => allLogins.includes(login);

const addLogin = function(allLogins, login) {
    if (!isLoginValid(login)) {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
    } else if (!isLoginUnique(allLogins, login)) {
        allLogins.push(login);
        alert('Логин успешно добавлен');
    } else {
        alert('Такой логин уже используется!');
    }
}
addLogin(allLogins, login);
console.log(allLogins);