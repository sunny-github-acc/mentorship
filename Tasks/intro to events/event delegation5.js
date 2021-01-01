'use strict';

let element = document.body.querySelector("div"),
    div = document.createElement("div");

element.append(div);
div.innerHTML = "One <a href='google.com'>link</a> and <a href='gmail.com'><i>another</i></a>.";
div.addEventListener("click", linkHandler);

function linkHandler(e) {
    let link = e.target;
    if (link.tagName != "A" && !link.closest("a")) return;

    let input = prompt("Proceed?", "Yes"),
        href = link.tagName === "A" ? link.href : link.closest("a").href;
    e.preventDefault();
    input === "Yes" ? window.location.href = href : null;
}