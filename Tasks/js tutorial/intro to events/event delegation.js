'use strict';

let element = document.body.querySelector("div");

for (let i = 0; i < 3; i++) {
    let message = document.createElement("div"),
    button = document.createElement("button");
    message.innerHTML = `${i}Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Cum blanditiis non aliquam placeat enim voluptatem dolorem,
    rem iste molestias nostrum magni repellendus quam eos facilis quidem explicabo
    omnis molestiae. Consectetur?`;
    button.innerHTML = "[X]";
    element.append(message);
    message.append(button);
}

element.onclick = function(e) {
    let target = e.target;

    if (target.tagName != "BUTTON") return;

    remove(target.parentElement);
}

function remove(target) {
    target ? target.remove() : null;
}