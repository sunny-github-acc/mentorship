'use strict';

let div = document.createElement("div");
document.body.append(div);
div.innerHTML = "div";
div.addEventListener("mousedown", toTextArea);

function toTextArea() {
    let textarea = document.createElement("textarea");
    textarea.innerHTML = div.innerHTML;
    textarea.addEventListener("keydown", handleInput);
    textarea.addEventListener("blur", handleBlur);
    this.replaceWith(textarea);
    handleInput();

    function handleInput() {
        div.innerHTML = textarea.value;
}

    function handleBlur() {
        this.replaceWith(div);
    }

}

