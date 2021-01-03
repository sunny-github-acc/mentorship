'use strict';

let element = document.body.querySelector("div"),
    container = document.createElement("div"),
    main = document.createElement("img"),
    thumbnail = document.createElement("div"),
    imgs = ["https://cdn.pixabay.com/photo/2016/11/29/13/49/christmas-bauble-1869989_960_720.jpg",
            "https://cdn.pixabay.com/photo/2016/11/02/13/01/winter-1791370_960_720.jpg",
            "https://cdn.pixabay.com/photo/2018/12/22/10/40/tree-decorations-3889456__340.jpg",
            "https://cdn.pixabay.com/photo/2019/12/26/15/16/christmas-4720604__340.jpg",
            "https://cdn.pixabay.com/photo/2016/11/14/09/14/new-years-eve-1822979__340.jpg",
            "https://cdn.pixabay.com/photo/2016/11/29/03/46/berry-1867135__340.jpg"],
    imgLength = 0;

element.append(container);
container.append(main);
container.append(thumbnail);
main.setAttribute("src", imgs[0]);
let mainRect = main.getBoundingClientRect(),
    thumbnailRect = thumbnail.getBoundingClientRect();
main.style.width = mainRect.width / 2 + "px";   
thumbnail.style.width = mainRect.width / 2  + "px";
thumbnail.style.height = "50px";
thumbnail.addEventListener("click", handleImg);


for (let i of imgs) {
    let a = document.createElement("a"),
        img = document.createElement("img");
    a.append(img);
    a.setAttribute("href", i);
    img.setAttribute("src", i);
    img.setAttribute("alt", "img" + imgLength);
    imgLength++;
    img.style.paddingLeft = "10px";
    thumbnail.append(a);
}

function handleImg(e) {
    let img = e.target.closest("a");
    if (!img) return;
    main.setAttribute("src", img.getAttribute("href"));
    main.setAttribute("alt", img.firstChild.getAttribute("alt"));
    e.preventDefault();
}
