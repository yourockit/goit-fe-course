let userInput;
const numbers = [];
let total = 0;
do {
    userInput = prompt('Введите число');
    if (isNaN(userInput)) {
        alert('Было введено не число, попробуйте еще раз');
    } else if (userInput > 0) {
        numbers.push(userInput);
    }
    // else {
    //   console.log(numbers);
    // }
} while (userInput !== null);

for (let i of numbers) {
    total = total + parseInt(numbers[i]);
    if (numbers.length !== null) {
        alert(`Общая сумма чисел равна ${total}`);
    } else {
        alert('Массив пуст');
    }
}
console.log(total);