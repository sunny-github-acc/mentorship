'use strict';

let body = document.body,
    arrow = document.createElement("p");
body.style.height = window.innerHeight + 200 + "px";
arrow.innerHTML = "^";
arrow.style.fontSize = "20px";  
arrow.style.cursor = "pointer"; 
arrow.style.userSelect = "none";  
arrow.style.position = "fixed";
arrow.style.top = "20px";
document.addEventListener("scroll", handleScroll);

function handleScroll(e) {
    let doc = document.documentElement;
    
    if (doc.scrollTop > 50) {
        body.append(arrow);
        arrow.addEventListener("mousedown", () => scrollTo(pageXOffset, 0));
    } 
    else arrow.remove();

    if (doc.offsetHeight - doc.scrollTop < window.innerHeight + 200) {
        return body.style.height = parseInt(body.style.height) + 200 + "px";
    } 

}

