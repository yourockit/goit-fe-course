const clockFace = document.querySelector(".js-time");
const btnStart = document.querySelector(".js-start");
const btnLap = document.querySelector(".js-take-lap");
const btnReset = document.querySelector(".js-reset");
const lapsUl = document.querySelector(".js-laps");
const lapsArray = [];

let count = 0;

const timer = {
    timerId: null,
    isActive: false,
    startTime() {
        if (!this.isActive) {
            this.isActive = true;
            this.timerId = setInterval(() => {
                count += 1;
                miliseconds = count;
                seconds = Math.floor(count / 10);
                minutes = Math.floor(count / 10 / 60);


                miliseconds = miliseconds % 10;
                seconds = seconds % 60;
                minutes = minutes % 24;

                seconds = seconds < 10 ? "0" + seconds : seconds;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                btnStart.textContent = "Pause"

                clockFace.textContent = `${minutes}:${seconds}.${miliseconds}`;
            }, 100);
        } else {
            this.isActive = false;
            clearInterval(this.timerId);
            clockFace.textContent = `${minutes}:${seconds}.${miliseconds}`;
            btnStart.textContent = "Continue";
        }
    },
    resetTime() {
        clearInterval(this.timerId);
        this.isActive = false;
        count = 0;
        miliseconds = 0;
        seconds = 0;
        minutes = 0;
        clockFace.textContent = `0${minutes}:0${seconds}.${miliseconds}`
        btnStart.textContent = "Start";
    },
    takeLap() {
        lapsArray.push(clockFace.textContent);
        const li = document.createElement("li");
        li.append(clockFace.textContent);
        lapsUl.append(li);
    }
}

btnStart.addEventListener("click", timer.startTime);
btnReset.addEventListener("click", timer.resetTime);
btnLap.addEventListener("click", timer.takeLap)