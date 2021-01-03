'use strict';

let div = document.createElement("div");
div.innerHTML = `
<pre id="mouse">
_   _
(q\_/p)
/. .\
=\_t_/=   __
/   \   (
((   ))   )
/\) (/\  /
\  Y  /-'
nn^nn
</pre>`;
let pre = div.querySelector("pre");
document.body.append(pre);
pre.setAttribute("tabindex", "1");
pre.style.position = 'fixed';
pre.addEventListener("keydown", handleKey);

function handleKey(e) {
    console.log(e)
    switch (e.key) {
        case "ArrowRight":
            isNaN(parseInt(pre.style.left)) ? 
            this.style.left = Number(pre.style.left) + this.offsetWidth + "px" :
            this.style.left = parseInt(pre.style.left) + this.offsetWidth + "px";
            return false;
        case "ArrowLeft":
            isNaN(parseInt(pre.style.left)) ? 
            this.style.left = Number(pre.style.left) - this.offsetWidth + "px" :
            this.style.left = parseInt(pre.style.left) - this.offsetWidth + "px";
            return false;
        case "ArrowDown":
            isNaN(parseInt(pre.style.top)) ? 
            this.style.top = Number(pre.style.top) + this.offsetHeight + "px" :
            this.style.top = parseInt(pre.style.top) + this.offsetHeight + "px";
            return false;
        case "ArrowUp":
            isNaN(parseInt(pre.style.top)) ? 
            this.style.top = Number(pre.style.top) - this.offsetHeight + "px" :
            this.style.top = parseInt(pre.style.top) - this.offsetHeight + "px";
            return false;
            
    }
}
