'use strict';

let element = document.body.querySelector("ul").querySelectorAll("li");

for (let i = element[0].textContent; i < element[1].textContent - 1; i++) {
    let li = document.createElement("li");
    li.textContent = Number(i) + 1;
    element[0].parentNode.insertBefore(li, element[element.length - 1]);
}

element[0].insertAdjacentHTML("beforebegin", "<li>bonus</li>");
