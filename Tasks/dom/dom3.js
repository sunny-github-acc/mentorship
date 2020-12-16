'use strict';

let element = document.body.querySelectorAll("div")[0];

console.log('cal', element)

function createCalendar(elem, year, month) {
    let table = document.createElement("table"),
    tBody = document.createElement("tbody"),
    isFebruary = month === 2 ? 6 : 7,
    days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
    day = 1,
    firstWeekDay = new Date(year, month, 1).getDay(),
    lastDay = new Date(year, month + 1, 0).getDate(),
    start;

    table.append(tBody);
    
    for (let i = 0; i < 1; i++) {
        let tRow = document.createElement("tr");
        
        for (let j = 0; j < 7; j++) {
            tRow.innerHTML += `<th>${days[j]}</th>`;
        }
        
        tBody.append(tRow);
    }

    for (let i = 1; i < isFebruary; i++) {
        let tRow = document.createElement("tr");
        
        for (let j = 1; j < 8; j++) {
            j === firstWeekDay ? start = true : null;
            day > lastDay ? start = tData = "" : null;

            if (start) {
                tRow.innerHTML += `<td>${day}</td>`
                day++;
            } else {
                tRow.innerHTML += "<td></td>";
            }
        }
        
        tBody.append(tRow);
    }

    elem.append(table);
    return "hello"
}

createCalendar(element, 2020, 11);