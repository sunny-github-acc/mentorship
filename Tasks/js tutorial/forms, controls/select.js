'use strict';

let select = document.createElement("select");
document.body.append(select);
select.innerHTML = `<select id="genres">
  <option value="rock">Rock</option>
  <option value="blues" selected>Blues</option>
</select>`;
let option = new Option("Classic", "classic", true, true);
select.append(option);