'use strict';

let element = document.body.querySelector("div");
element.addEventListener("mousedown", handleTop);

function handleTop(e) {
    let shiftY = e.clientY - element.getBoundingClientRect().top;

    element.style.position = "absolute";
    element.style.userSelect = "none";

    moveAt(e.pageY);

    function moveAt(pageY) {
        element.style.top = pageY - shiftY + "px";
    }

    function onMouseMove(e) {
        moveAt(e.pageY);
    }

    document.addEventListener("mousemove", onMouseMove);
    
    element.onmouseup = function() {
        document.removeEventListener("mousemove", onMouseMove); 
        element.onmouseup = null;
    }
}

element.ondragstart = function() {
    return false;
}