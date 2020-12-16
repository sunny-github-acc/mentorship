'use strict';

let tBody = document.body.querySelector("tbody"),
tRows = tBody.querySelectorAll("tr"),
newRows = document.createElement("tbody"),
objRows = {};

for (let i = 0; i < tRows.length - 1; i++) {
    let key = tRows[i].firstChild.nextSibling.textContent;
    objRows[key] = tRows[i];
}

for (let i = 0; i < tRows.length - 1; i++) {
    newRows.append(Object.entries(objRows).sort()[i][1]);
}

newRows.append(tRows[tRows.length - 1]);

document.body.querySelector("table").append(newRows);

// let sortedRows = Array.from(table.tBodies[0].rows) // 1
//   .sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));

//   table.tBodies[0].append(...sortedRows); // (3)


