'use strict';

let form = document.createElement("form"),
    buttons = document.createElement("div"),
    initButton = document.createElement("button");

form.innerHTML = `
<div class="container"></div>
<div class="form-container">
  <div class="text">Hello</div>
  <div class="input-container"><input id="input" type="text"></div>
  <div class="button-container">
    <button id="OK" type="submit" value="Submit">OK</button>
    <button id="Cancel" type="submit" value="Submit">Cancel</button>
  </div>
</div>`;

initButton.innerHTML = "initiate";
initButton.addEventListener("click", initiateForm);
document.body.append(initButton);
initiateForm();

function initiateForm() {
    document.body.append(form);
    let container = document.body.querySelector(".container"),
        form_container = document.body.querySelector(".form-container"),
        buttonOK = document.body.querySelector("#OK"),
        buttonCancel = document.body.querySelector("#Cancel");

    container.style.position = "fixed";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.backgroundColor = "grey";
    container.style.top = 0;
    container.style.left = 0;
    container.style.opacity = "0.5";
    container.style.zIndex = 1;
    form_container.style.opacity = "1";
    form_container.style.zIndex = 999;
    form_container.style.backgroundColor = "white";
    form_container.style.padding = "10px";
    form_container.style.position = "fixed";
    form_container.style.left = window.innerWidth / 2 - form_container.offsetWidth / 2 + "px";
    buttonOK.addEventListener("click", handleOK);
    buttonCancel.addEventListener("click", handleCancel);

    function handleOK(e) {
        e.preventDefault();
        let val = e.target.closest(".form-container").querySelector("#input");
        console.log(val.value);
        val.value = "";
        form.remove();
    }

    function handleCancel() {
        form.remove();
    }
    
}

function showPrompt(html, callback) {

}



showPrompt("html", function(val) {
    console.log(val)
});