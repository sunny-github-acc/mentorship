'use strict';

let element = document.body.querySelector("div"),
    div = document.createElement("div");
    div.innerHTML = `<table id="grid">
    <thead>
      <tr>
        <th data-type="number">Age</th>
        <th data-type="string">Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>5</td>
        <td>John</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Ann</td>
      </tr>
      ...
    </tbody>
  </table>`;

  div.addEventListener("click", tableSort);

  function tableSort(e) {
      let th = e.target;
      if (th.dataset.type != "string" && th.dataset.type != "number") return;
      
      let trs = div.querySelector("tbody").rows,
          colNum = th.cellIndex,
          sorted;
          if (colNum === 1) {
              sorted = Array.from(trs).sort((a, b) => { 
                  return a.cells[colNum].innerHTML.localeCompare(b.cells[colNum].innerHTML);
                });
          } else {
              sorted = Array.from(trs).sort((a, b) => { 
                return a.cells[colNum].innerHTML - b.cells[colNum].innerHTML; 
            })
          }
  div.querySelector("tbody").append(...sorted);
  }
  

element.append(div);

