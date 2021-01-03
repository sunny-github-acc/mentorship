'use strict';

let element = document.body.querySelector("div");

function showNotification(params) {
    element.style.position = "absolute";
    element.style.border = "55px solid black";
    element.style.top = "200px";
    element.style.width = "50px";
    element.style.right = `${document.documentElement.clientWidth / 2 - element.getBoundingClientRect().width / 2}` + "px";
    element.innerHTML = params["html"];
    element.className = "notification";

    // let elementRect = element.getBoundingClientRect(),
    // upper = elementRect.top,
    // left = elementRect.left,
    // bottom = elementRect.bottom,
    // right = elementRect.right,
    // upperInner = upper + getComputedStyle(element).borderToptWidth,
    // leftInner = left + getComputedStyle(element).borderLefttWidth,
    // bottomInner = bottom - getComputedStyle(element).borderBottomtHeight,
    // rightInner = right - getComputedStyle(element).borderRighHeight,
    // leftUpper = left + element.clientLeft,
    // topUpper = left + element.clientTop;

    // get document coordinates of the element
    // elementRect.top + window.pageYOffset
    // elementRect.right + window.pageXOffset,
    // elementRect.bottom + window.pageYOffset,
    // elementRect.left + window.pageXOffset
}

showNotification({
    top: 10, // 10px from the top of the window (by default 0px)
    right: 10, // 10px from the right edge of the window (by default 0px)
    html: "Hello!", // the HTML of notification
    className: "welcome" // an additional class for the div (optional)
  });

function positionAt(anchor, position, elem) {
    let anchorRect = anchor.getBoundingClientRect(),
    elemRect = elem.getBoundingClientRect();
    elem.style.position = "absolute";
    elem.style.color = "blue";
    if (position === "top") {
        elem.style.left = anchorRect.left + "px ";
        elem.style.top = `${anchorRect.top - elemRect.height}px`;
    } else if (position === "right") {
        elem.style.top = anchorRect.top + "px";
        elem.style.left = anchorRect.right + "px";
    } else if (position === "bottom") {
        elem.style.left = anchorRect.left + "px";
        elem.style.top = anchorRect.bottom + "px";
    }
}

function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
  }



showNote(element, "top", "note above");
showNote(element, "right", "note at the right");
showNote(element, "bottom", "note below");

