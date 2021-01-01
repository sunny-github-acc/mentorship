'use strict';

let element = document.body.querySelector("div"),
    div = document.createElement("div"),
    p = document.createElement("p"),
    tooltip = document.createElement("p"),
    timer;

    element.dataset.tooltip = "main";
    div.innerHTML = "Hello";
    div.dataset.tooltip = "div";
    p.innerHTML = "Hi";
    p.dataset.tooltip = "p";
    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

    function handleMouseOver(e) {
        let elem = e.target;
        if (!elem.closest("[data-tooltip]")) return;
        timer = setTimeout(() => document.body.append(tooltip), 500);
        tooltip.innerHTML = elem.dataset.tooltip;
    }

    function handleMouseOut(e) {
        clearTimeout(timer);
        tooltip.remove();
    }

    element.append(div);
    div.append(p);