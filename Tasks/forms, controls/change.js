'use strict';

let table = document.createElement("table");



table.innerHTML = `<tbody>
<tr>
    <td>Deposit calculator</td>
</tr>
<tr>
    <td>Initial deposit</td>
    <td>
        <input id="init" type="number" value="1000"/>
    </td>
</tr>
<tr>
    <td>How many months</td>
    <td>
        <select name="" id="select">
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="12" selected>12</option>
            <option value="18">18</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="60">60</option>
        </select>
    </td>
</tr>
<tr>
    <td>Interest per year?</td>
    <td>
        <input id="interest" type="number" value="10"/>
    </td>
</tr>
<tr>
    <td><strong>Was:</strong></td>
    <td><strong>Becomes:</strong></td>
</tr>
<tr>
    <td id="prev"></td>
    <td id="fol"></td>
</tr>
<tr>
    <td>
        <div id="red_col" style="background-color: red;"></div>
    </td>
    <td>
        <div id="green_col" style="background-color: green;"></div>
    </td>
</tr>
</tbody>`;
document.body.append(table);

let td = document.body.querySelectorAll("td"),
    init = document.body.querySelector("#init"),
    select = document.body.querySelector("#select"),
    interest = document.body.querySelector("#interest"),
    prev = document.body.querySelector("#prev"),
    fol = document.body.querySelector("#fol"),
    red_col = document.body.querySelector("#red_col"),
    green_col = document.body.querySelector("#green_col");
    
for (let i of td) i.style.height = 20 + "px";
red_col.style.width = "20px";
green_col.style.width = "20px";
red_col.parentElement.style.verticalAlign = "bottom";
green_col.parentElement.style.verticalAlign = "bottom";


init.addEventListener("input", handleChange);
select.addEventListener("change", handleChange);
interest.addEventListener("input", handleChange);
handleChange();

function handleChange() {
    prev.textContent = init.value;
    fol.textContent = Math.round(init.value * (1 + interest.value / 100 * select.value / 12));
    red_col.style.height = parseInt(prev.textContent) / 10 + "px";
    green_col.style.height = parseInt(fol.textContent) / 10 + "px";
}

