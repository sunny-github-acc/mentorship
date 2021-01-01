'use strict';

let element = document.body.querySelector("div"),
        img1 = document.createElement("img"),
        img2 = document.createElement("img"),
        img3 = document.createElement("img"),
        img4 = document.createElement("img"),
        img5 = document.createElement("img"),
        div1 = document.createElement("div"),
        div2 = document.createElement("div"),
        div3 = document.createElement("div"),
        div4 = document.createElement("div"),
        div5 = document.createElement("div");

    img1.setAttribute("src", "");
    img2.setAttribute("src", "");
    img3.setAttribute("src", "");
    img4.setAttribute("src", "");
    img5.setAttribute("src", "https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637__340.jpg");

    div1.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora, error reiciendis mollitia excepturi architecto dolores sunt alias incidunt. Quis, id voluptas. Eum reprehenderit delectus doloribus culpa unde porro minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora, error reiciendis mollitia excepturi architecto dolores sunt alias incidunt. Quis, id voluptas. Eum reprehenderit delectus doloribus culpa unde porro minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora, error reiciendis mollitia excepturi architecto dolores sunt alias incidunt. Quis, id voluptas. Eum reprehenderit delectus doloribus culpa unde porro minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora, error reiciendis mollitia excepturi architecto dolores sunt alias incidunt. Quis, id voluptas. Eum reprehenderit delectus doloribus culpa unde porro minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora, error reiciendis mollitia excepturi architecto dolores sunt alias incidunt. Quis, id voluptas. Eum reprehenderit delectus doloribus culpa unde porro minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora, error reiciendis mollitia excepturi architecto dolores sunt alias incidunt. Quis, id voluptas. Eum reprehenderit delectus doloribus culpa unde porro minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora, error reiciendis mollitia excepturi architecto dolores sunt alias incidunt. Quis, id voluptas.`
    div2.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora, error reiciendis mollitia excepturi architecto dolores sunt alias incidunt. Quis, id voluptas. Eum reprehenderit delectus doloribus culpa unde porro minima.`
    div3.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora, error reiciendis mollitia excepturi architecto dolores sunt alias incidunt. Quis, id voluptas. Eum reprehenderit delectus doloribus culpa unde porro minima.`
    div4.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora, error reiciendis mollitia excepturi architecto dolores sunt alias incidunt. Quis, id voluptas. Eum reprehenderit delectus doloribus culpa unde porro minima.`
    div5.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora, error reiciendis mollitia excepturi architecto dolores sunt alias incidunt. Quis, id voluptas. Eum reprehenderit delectus doloribus culpa unde porro minima.`
    
    // https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637__340.jpg

    document.body.append(img1);
    document.body.append(div1);
    document.body.append(img2);
    document.body.append(div2);
    document.body.append(img3);
    document.body.append(div3);
    document.body.append(img4);
    document.body.append(div4);
    document.body.append(img5);

    document.addEventListener("scroll", handleImg);

    function handleImg(e) {
        let imgs = document.body.querySelectorAll("img");
        for (let i of imgs) i.getBoundingClientRect().bottom > 0 ? i.setAttribute("src", "https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637__340.jpg") : null;
    }