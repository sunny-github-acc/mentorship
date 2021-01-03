'use strict';

let btn = document.createElement("button"),
    img = document.createElement("img");
btn.innerHTML = "drag me";
img.setAttribute("src", "https://cdn.pixabay.com/photo/2019/12/14/22/59/christmas-4695973__340.jpg");
img.setAttribute("alt", "img");
btn.setAttribute("class", "draggable");
img.setAttribute("class", "draggable");
img.style.height = "200px";
document.body.style.height = "800px";
document.body.style.width = "900px";
document.addEventListener("mousedown", handleDrag);
document.body.append(btn);
document.body.append(img);

function handleDrag(e) {
    let elem = e.target.closest(".draggable");
    if (!elem) return;

    e.preventDefault();

    let shiftX = e.clientX - elem.getBoundingClientRect().left,
        shiftY = e.clientY - elem.getBoundingClientRect().top;

    elem.style.zIndex = 1000;

    function moveAt(clientX, clientY) {
        let newX = clientX - shiftX,
            newY = clientY - shiftY,
            newBottom = newY + elem.offsetHeight,
            newRight = newX + elem.offsetWidth;

        if (newBottom > document.documentElement.clientHeight) {
            let docBottom = document.documentElement.getBoundingClientRect().bottom,
                scrollY = Math.min(docBottom - newBottom, 10);
                console.log("b", docBottom, newBottom)

            if (scrollY < 0) scrollY = 0;

            window.scrollBy(0, 10); // why it works ? window.scrollBy(0, scrollY);

            newY = Math.min(newY, document.documentElement.clientHeight - elem.offsetHeight);
        }

        if (newRight > document.documentElement.clientWidth) {
            let docRight = document.documentElement.getBoundingClientRect().right,
                scrollX = Math.max(docRight - newRight, 10); // why docRight - newRight < 0 
                
            if (scrollX < 0) scrollX = 0;

            window.scrollBy(10, 0); // ??? window.scrollBy(scrollX, 0);

            newX = Math.min(newX, document.documentElement.clientWidth - elem.offsetWidth);
        }

        if (newY < 0) {
            let scrollY = Math.min(-newY, 10);
            if (scrollY < 0) scrollY = 0;

            window.scrollBy(0, -scrollY);

            newY = Math.max(newY, 0);
        }

        if (newX < 0) {
            let scrollX = Math.min(-newX, 10);
            if (scrollX < 0) scrollX = 0;

            window.scrollBy(-scrollX, 0);

            newX = Math.max(newX, 0);
        } 

        elem.style.left = newX + "px";
        elem.style.top = newY + "px";
    }

    function onMouseMove(e) {
        elem.style.position = "fixed";
        moveAt(e.clientX, e.clientY);
    }

    document.addEventListener("mousemove", onMouseMove);
    
    document.onmouseup = function() {   
        document.removeEventListener("mousemove", onMouseMove);
        elem.style.top = parseInt(elem.style.top) + window.pageYOffset + "px";
        elem.style.left = parseInt(elem.style.left) + window.pageXOffset + "px";
        elem.style.zIndex = 1;
        elem.style.position = "absolute"
        document.onmouseup = null;
    }

    elem.ondragstart = function() {
        return false;
    }
}
