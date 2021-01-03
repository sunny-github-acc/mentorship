'use strict';

let element = document.body.querySelector("div"),
    button = document.createElement("button"),
    button2 = document.createElement("button");
    
    document.body.style.height = "1000px";
    button.innerHTML = `Short button`;
    button2.innerHTML = `One more button`;
    button.dataset.tooltip = "the tooltip is longer than the element";
    button2.dataset.tooltip = "HTML<br>tooltip";
    document.body.append(button);
    document.body.append(button2);
    document.body.addEventListener("mouseover", tooltipOver);
    document.body.addEventListener("mouseout", tooltipOut);

    function tooltipOver(e) {
        if (e.target.tagName != "BUTTON") return;

        let tooltip = document.createElement("div"),
            tooltipRect = tooltip.getBoundingClientRect(),
            button = e.target,
            buttonRect = button.getBoundingClientRect();

        tooltip.innerHTML = button.dataset.tooltip;
        tooltip.style.position = "relative";
        tooltip.style.background = "white";
        tooltip.id = "tooltip";
        button.parentElement.append(tooltip);
        tooltip.style.left = buttonRect.left - tooltipRect.left + "px";

        tooltip.offsetHeight > buttonRect.top ? null : tooltip.style.bottom = buttonRect.bottom - 5 + "px";
    }

    function tooltipOut(e) {
        document.body.querySelector("#tooltip") ? document.body.querySelector("#tooltip").remove() : null;
    }


