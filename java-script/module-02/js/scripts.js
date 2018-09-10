let userInput;
const numbers = [];
let total = 0;
do {
    if (userInput = prompt('Введите число')) {
        if (!isNaN(userInput)) {
            numbers.push(+userInput);
        } else {
            alert('Было введено не число, или не целое число, попробуйте еще раз');
        }
    } else if (userInput == null) {
        break;
    }
} while (userInput !== null);

if (numbers.length != 0) {
    for (let i of numbers) {
        total += i;
    }
    alert(`Общая сумма чисел равна ${total}`);
} else {
    alert('Массив пуст')
}