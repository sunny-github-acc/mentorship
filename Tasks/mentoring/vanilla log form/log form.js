'use strict';

let element = document.body.querySelector("div");
element.innerHTML = `

<div class="form-container">
  <div class="title">
    <strong>Register With Us</strong>
  </div>
  <form class="form" action="#">
    <div class="username-container input-container">
      <label for="username" class="label-username label-text">Username</label>
      <input type="text" class="input-username input-box" name="username" placeholder="Enter username">
      <span></span>
    </div>
    <div class="email-container input-container">
      <label for="email" class="label-email label-text">Email</label>
      <input type="email" class="input-email input-box" name="email" placeholder="Enter email">
      <span></span>
     </div>
    <div class="password-container input-container">
      <label for="password" class="label-password label-text">Password</label>
      <input type="password" class="input-password input-box" name="password" placeholder="Enter password" autocomplete="on">
      <span></span>
    </div>
    <div class="confirm-password-container input-container">
      <label for="confirm-password" class="label-confirm-password label-text">Confirm Password</label>
      <input type="password" class="input-confirm-password input-box" name="confirm-password" placeholder="Enter password again" autocomplete="on">
      <span></span>
     </div>
    <div class="submit-container input-container">
      <input type="submit" class="input-submit">
    </div>
  </form>
</div>`;

let username = document.body.querySelector(".input-username"),
    email = document.body.querySelector(".input-email"),
    password = document.body.querySelector(".input-password"),
    confirm_password = document.body.querySelector(".input-confirm-password"),
    submit = document.body.querySelector(".input-submit");

submit.addEventListener("click", validator);

function validator(e) {
    e.preventDefault();
    let email_validator = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (username.value.length < 3) {
        username.classList.remove(".input-box:focus");
        username.classList.remove("success");
        username.classList.add("danger")
    } else {
        username.classList.remove("danger");
        username.classList.add("success");
    }

    if (email_validator.test(email.value)) {
        email.classList.remove("danger");
        email.classList.add("success");
    } else {
        email.classList.remove("success");
        email.classList.add("danger");
    }

    if (password.value.length < 6) {
        password.classList.remove("success");
        password.classList.add("danger");
    } else {
        password.classList.remove("danger");
        password.classList.add("success");
    }

    if (!confirm_password.value) {
        confirm_password.classList.remove("success");
        confirm_password.classList.add("danger2");
    } else {
        confirm_password.classList.remove("danger2");
        
        if (password.value != confirm_password.value) {
            confirm_password.classList.remove("success");
            confirm_password.classList.add("danger");
        } else {
            confirm_password.classList.remove("danger");
            confirm_password.classList.add("success");
        }
    }
    
    return false;
}