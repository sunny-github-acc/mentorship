'use strict';

// normal way
let lists = document.getElementsByTagName("li");

for (let list of lists) {
    let descCount = list.getElementsByTagName("li").length;
    descCount ? list.firstChild.data += ` [${descCount}]` : null;
}

// abnormal way

let elems = document.body.children[0].innerHTML.toString();

function divider(str) {
    let liDescendants = {},
    strFinal,
    strCopy = str
    .split(" ").join("")
    .split(`\n`).join("")
    .split(">").join(" ")
    .split("<").join(" ")
    .split(" ")
    .filter(i => i != "li" && i != "" && i != "/li");

    strCopy.map((i, index) => converter(i, liDescendants, index));

    strFinal = str
    .split(" ").join("")
    .split(`\n`).join("")
    .split(">").join(" ")
    .split("<")
    .map(i => {
        for (let key in liDescendants) {
            if (i.includes(key)) {
                i = `${i} [${liDescendants[key]}]`;
            }
        }
            return i;
    })
    .map(i => {
        if (i.includes("li")) {
             i = i.split(" ")
             .map(i2 => i2.includes("li") ? `<${i2}>` : i2)
             .join(" ");
             
             i[4] === " " ? i = i.slice(0, 4) + i.slice(5) : null;

            return i;
        } else if (i.includes("ul")) {
            return `<${i.trim()}>`;
        }
        return i;
    })
    .join("");
    console.log(strFinal)

    function converter(list, liDesc, index) {
        converter.isDesc = false;
        converter.descCount = 0;
        converter.temp;

        for (let i = index; i < strCopy.length; i++) {            
            if (strCopy[i] === "ul" && i != index) {
                converter.isDesc = true;
                converter.descCount++;
                continue;
            } else if (strCopy[i] === "/ul" && i != index) {
                converter.descCount--;  
                if (converter.descCount < 1) {
                    break;
                }
                continue;
            } else if (strCopy[i].includes("ul")) {
                break;
            } else if (strCopy[i] === list && i === index) {
                converter.temp = list;
                continue;
            } 

            if (converter.isDesc) {
                liDesc[converter.temp] === undefined ? liDesc[converter.temp] = 1 : liDesc[converter.temp]++;
            }
        }

        return list;
    }

    return strFinal;
}

// document.body.children[0].innerHTML = divider(elems);