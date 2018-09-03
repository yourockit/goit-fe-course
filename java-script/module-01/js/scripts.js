const numberOfPlace = prompt("Ввести число необходимых мест")
const sharm = 15;
const hurgada = 25;
const taba = 6;
const comeAgain = "Нам очень жаль, приходите еще!";
const niceTrip = "Приятного путешествия в группе";
const place = "Есть место в"

if (numberOfPlace % 1 == 0 && numberOfPlace > 0) {
    const numberUser = numberOfPlace;
    if (numberUser <= sharm && numberUser > taba) {
        const sharmPlace = confirm(`${place} sharm`);
        if (sharmPlace) {
            alert(`${niceTrip} sharm`);
        } else {
            alert(comeAgain);
        }
    } else if (numberUser <= hurgada && numberUser > sharm) {
        const hurgadaPlace = confirm(`${place} hurgada`);
        if (hurgadaPlace) {
            alert(`${niceTrip} hurgada`);
        } else {
            alert(comeAgain);
        }
    } else if (numberUser <= taba && numberUser > 0) {
        const tabaPlace = confirm(`${place} taba`);
        if (tabaPlace) {
            alert(`${niceTrip} taba`);
        } else {
            alert(comeAgain);
        }
    } else if (numberOfPlace > hurgada) {
        alert("Извините, столько мест нет ни в одной группе");
    }
} else {
    alert("Ошибка ввода");
}