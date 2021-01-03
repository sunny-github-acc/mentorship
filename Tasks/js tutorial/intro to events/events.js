'use strict';

let element = document.body.querySelector("div"),
div = document.createElement("div"),
button = document.createElement("button"),
ball = document.createElement("button");
button.innerHTML = "let's disappear";
ball.innerHTML = "👆";
button.onclick = function() {
    document.body.hidden = true;
}
document.body.append(div);
document.body.append(button);
div.append(ball);

document.body.style.minHeight = "1000px";
document.body.style.minWidth = "1000px";
div.style.width = "200px";
div.style.height = "300px"; 
div.style.border = "1px solid black"
ball.style.width = "30px";
ball.style.height = "30px"; 
ball.style.position = "relative";
ball.style.transition = "all 2s";
ball.style.left = "0px";
ball.style.top = "0px";
ball.style.transitionTimingFunction = "ease-out";
ball.addEventListener("click", double);
ball.addEventListener("click", message);

function double() {
    if (document.body.querySelector("#ball2")) {
        ball2.remove();
    } else {    
        let ball2 = document.createElement("button");
        div.append(ball2);
        ball2.setAttribute("id", "ball2");
        ball2.innerHTML = "😂";
        ball2.style.position = "relative";
    }
}

function message() {
    let message = document.createElement("div"),
    messageButton = document.createElement("button"),
    container = document.createElement("div"),
    containerEmojis = document.createElement("div"),
    messageEmojis = document.createElement("div"),
    leftButton = document.createElement("button"),
    rightButton = document.createElement("button"),
    messageLeft = messageEmojis.getBoundingClientRect().left;

    message.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ad ipsum cum eligendi reiciendis aut quidem repudiandae consectetur alias? 
    Illo ullam minus quam nulla sequi consectetur? 
    Deserunt nam itaque inventore odio.`;
    message.style.position = "absolute";
    message.style.width = div.offsetWidth + "px";
    message.style.height = div.offsetHeight + "px";
    message.style.left = div.offsetWidth + div.getBoundingClientRect().left + 15 + "px";
    message.style.top = div.getBoundingClientRect().top + "px";

    messageButton.innerHTML = "[X]";
    messageButton.style.background = "none";
    messageButton.style.border = "none";
    messageButton.style.color = "purple";
    messageButton.onclick = function() {
        this.parentNode.remove();
    }
    
    container.style.maxWidth = this.parentNode.offsetWidth;
    container.style.overflow = "hidden";
    // container.style.marginLeft = "20px";
    // container.style.marginRight = "20px";

    containerEmojis.style.maxWidth = this.parentNode.offsetWidth - 
    this.parentNode.firstChild.offsetWidth * 2 - 15 + "px";
    containerEmojis.style.overflow = "hidden";
    containerEmojis.style.float = "left";

    messageEmojis.innerHTML = "🤑 😇 🤓 👽 🎅 👳 😸 🤖 🤗 😎 👻";
    messageEmojis.style.width = "1000px";
    messageEmojis.style.maxHeight = this.offsetHeight + "px";
    messageEmojis.style.position = "relative";
    messageEmojis.style.paddingLeft = "0px";
    messageEmojis.style.paddingRight = "210px";
    messageEmojis.style.transition = "all 2s";
    messageEmojis.style.left = "0px";
    messageEmojis.setAttribute("class", "emojis");

    leftButton.innerHTML = "<strong><</strong>";
    leftButton.style.position = "relative";
    leftButton.style.float = "left";
    leftButton.style.border = "none";
    leftButton.style.background = "none";
    leftButton.style.top = "3px";
    leftButton.style.color = "red";
    leftButton.addEventListener("click", goLeft);

    rightButton.setAttribute("class", "emojis");
    rightButton.innerHTML = "<strong>></strong>";
    rightButton.style.position = "relative";
    rightButton.style.float = "left";
    rightButton.style.border = "none";
    rightButton.style.background = "none";
    rightButton.style.top = "3px";
    rightButton.style.color = "red";
    rightButton.addEventListener("click", goRight);

    function goRight() {
        if (goRight.count < 0) {
            goRight.count ? goRight.count += 25 : goRight.count = 25;
            messageEmojis.style.left = goRight.count + "px";
        }
    }

    function goLeft() {
        if (containerEmojis.getBoundingClientRect().width + goRight.count > 0 && 
            goRight.count <= 0 || goRight.count === undefined) {
                goRight.count ? goRight.count -= 25 : goRight.count = -25;
                messageEmojis.style.left = goRight.count + "px";
        }
    }

    container.append(leftButton);
    containerEmojis.append(messageEmojis);
    container.append(containerEmojis);
    container.append(rightButton);

    message.append(messageButton);
    message.append(container);
    document.body.append(message);
}

div.onclick = function(event) {
    let divRect = div.getBoundingClientRect(),
    ballHeight = ball.offsetHeight,
    ballWidth = ball.offsetWidth,
    eventX = event.clientX,
    eventY = event.clientY;

    if (eventX > divRect.right - ballWidth) {
        eventX = divRect.right - ballWidth / 2 - 
        getComputedStyle(ball).borderRight[0] - 
        getComputedStyle(div).borderRight[0] / 2;
    } else if (eventX < ballWidth / 2 + divRect.left + 
        Number(getComputedStyle(ball).borderLeft[0])) {

        eventX = divRect.left + ballWidth / 2;

    } 

    if (eventY > divRect.bottom - ballHeight) {
        eventY = divRect.bottom - ballHeight / 2 - 
        getComputedStyle(ball).borderBottom[0] - 
        getComputedStyle(div).borderBottom[0] / 2;

    } else if (eventY < divRect.top + ballHeight) {
        eventY = divRect.top + ballHeight / 2;
    }
    ball.style.top = `${eventY - divRect.top - ballHeight / 2 }px`;
    ball.style.left = `${eventX - divRect.left - ballWidth / 2 }px`;   

    if (document.querySelector("#ball2")) {
        let ball2Height = ball2.offsetHeight,
        ball2Width = ball2.offsetWidth,
        eventX2 = event.clientX,
        eventY2 = event.clientY,
        biggerHeight = div.offsetHeight + divRect.top - 
        Number(getComputedStyle(div).borderBottom[0]) - 
        Number(getComputedStyle(div).borderTop[0]) -
        Number(getComputedStyle(ball2).borderTop[0]),
        smallerHeight = biggerHeight - ball2Height,
        borderLeft = Number(getComputedStyle(div).borderLeft[0]);
        
        ball2.style.transition = "all 2s";
        ball2.style.transitionTimingFunction = "ease-out";
        
        if (eventY2 > smallerHeight / 2) {
            ball2.style.top =  biggerHeight - eventY2   + "px";
        }
        else if (eventY2 <= smallerHeight / 2) {
            ball2.style.top =  smallerHeight - eventY2 + "px";
        }
        


        if (eventX2 > div.offsetWidth / 2 + divRect.left) {
            ball2.style.left = div.offsetWidth - divRect.left - 
            eventX2 + borderLeft - ball2Width / 2 + "px";
        } else if (eventX2 <= div.offsetWidth / 2 + divRect.left) {
            ball2.style.left = div.offsetWidth - divRect.left - 
            eventX2 - ball2Width / 2 - ball2Width  - borderLeft + "px";
        }
    }
}