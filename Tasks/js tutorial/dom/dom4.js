'use strict';

let element = document.body.querySelector("div"),
div = document.createElement("div");

let timer;

function clock(isOn) {
    if (isOn === false) {
        stoper();
        return;
    }
    starter();
    timeCounter();

    function timeCounter() {
        let date =new Date(),
        hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
        minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(),
        time = `<p><span class="hours">${hours}</span>
        <span class="minutes">${minutes}</span>
        <span class="seconds">${seconds}</span></p>`,
        buttonOn = `<input type="button" value="Starte" onClick=clock()>`,
        buttonOff = `<input type="button" value="Stope" onClick=clock(false)>`;

        div.innerHTML = time + buttonOn + buttonOff;
    }

    function starter() {
        timer ? null : timer = setInterval(timeCounter, 1000);
    }

    function stoper () {
        clearInterval(timer);
        timer = null;
        return;
    }
}

    
clock();

element.append(div);