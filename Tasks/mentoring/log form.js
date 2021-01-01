'use strict';

let div = document.body.querySelector("div");
div.innerHTML = `
<div class="log-container">
    <div class="log-body">
        <div class="logo-container">
            <img class="img-logo" src="https://www.google.com/logos/doodles/2020/december-holidays-days-2-30-6753651837108830.5-s.png" alt="google logo">
        </div>
        <div class="welcome-container">Welcome</div>
        <div class="form-container">
            <form class="form" action="#">
                <div class="select-container">
                    <img class="select-img" src="https://i.ibb.co/sFtmJbM/output-onlinejpgtools.png" alt="profile logo">
                    <label for="select-profile"></label>
                    <select name="select-profile" class="select-profile">
                        <option class="select-profile" value="karolis.kazak@gmail.com">karolis.kazak@gmail.com</option>
                    </select>
                    <img class="select-img-v" src="https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png" alt="v symbol">
                </div>
                
                <label for="password-input"></label>
                <input type="password" class="password-input" name="password-input" autocomplete="on" required autofocus>
                <div class="password-input-placeholder">Enter your password</div>

                <div class="checkbox-container">
                    <section>
                        <input class="checkbox-box" name="checkbox-password" id='checkbox-password' type='checkbox' />
                        <label for='checkbox-password'>
                            <span></span>
                            Show password
                        </label>
                    </section>
                </div>

                <div class="f-next-container">
                    <p class="password-reminder"><strong>Forgot password?</strong></p>
                    <input class="log-submit" type="submit" value="Next">
                </div>
            </form>
        </div>
    </div>
    <div class="log-footer">
        <div class="log-form-container">
            <form action="">
                <label for="language-select"></label>
                <select class="footer-select" name="language-select" id="">
                    <option value="english (united states)">English (United States)</option>
                </select>
            </form>
        </div>
        <div class="footer-misc">
            <p class="misc-items">Help</p>
            <p class="misc-items">Privacy</p>
            <p class="misc-items">Terms</p>
        </div>
    </div>
</div>`;

let select_container = document.body.querySelector(".select-container"),
    select_img = document.body.querySelector(".select-img"),
    select_img_v = document.body.querySelector(".select-img-v"),
    select_profile = document.body.querySelector(".select-profile"),
    email_input = document.body.querySelector(".password-input"),
    email_input_placeholder = document.body.querySelector(".password-input-placeholder"),
    email_submit = document.body.querySelector(".form"),
    checkbox = document.body.querySelector(".checkbox-box");


    window.addEventListener("load", handleLoad);
    select_profile.parentElement.addEventListener("mousedown", handleProfile);
    email_input.addEventListener("mousedown", handleEmailInput);
    email_input.addEventListener("focus", handleEmailInput);
    email_input_placeholder.addEventListener("click", handleEmailInput);
    email_input.addEventListener("blur", handleEmailInputBlur);
    email_submit.addEventListener("submit", handleSubmit);
    checkbox.addEventListener("click", handleCheck);

    handleLoad();

    function handleLoad() {
        email_input.focus();
        select_container.style.width = select_img.offsetWidth + select_img_v.offsetWidth + select_profile.offsetWidth + 30 + "px";
        select_container.style.left = (select_container.closest("form").offsetWidth - select_container.offsetWidth) / 2 + "px";
    }

    function handleProfile(e) {
        alert(":)");
        e.preventDefault();
    }

    function handleEmailInput() {
        email_input_placeholder.classList.add("password-input-placeholder-background-active");
        email_input_placeholder.classList.remove("password-input-placeholder-background"); 
        email_input.focus();
    }

    function handleEmailInputBlur() {
        if (email_input.value) {
            email_input_placeholder.classList.remove("password-input-placeholder-background-active"); 
            email_input_placeholder.classList.add("password-input-placeholder-background");  
        } else {
            email_input_placeholder.classList.remove("password-input-placeholder-background-active");
            email_input_placeholder.classList.remove("password-input-placeholder-background"); 
        }
    }

    function handleSubmit(e) {
        alert(":)");
        return false;
    }

    function handleCheck(e) {
        this.checked ? email_input.type = "text" : email_input.type = "password";
    }