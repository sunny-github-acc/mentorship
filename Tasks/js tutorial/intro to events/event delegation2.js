'use strict';

let element = document.body.querySelector("div"),
div = document.createElement("div");
div.innerHTML = `
<ul>
  <li>Animals 
    <ul>
      <li>Mammals 
          <ul>
            <li>Cows</li>
            <li>Donkeys</li>
            <li>Dogs</li>
            <li>Tigers</li>
          </ul>
      </li>
      <li>Other
          <ul>
            <li>Snakes</li>
            <li>Birds</li>
            <li>Lizards</li>
          </ul>
      </li>
    </ul>
  </li>
  <li>
    Fishes
      <ul>
        <li>Aquarium
          <ul>
            <li>Guppy</li>
            <li>AngelFish</li>
          </ul>
        </li>
        <li>Sea
          <ul>
            <li>Sea trout</li>
          </ul>
        </li>
      </ul>
  </li>
</ul>`;

div.addEventListener("click", treeMenu);
div.addEventListener("mouseover", treeHover);
div.addEventListener("mouseout", treeHoverOut);

function treeMenu(e) {
    e.target.children[0] ? e.target.children[0].hidden = !e.target.children[0].hidden : null;
}

function treeHover(e) {
    e.target.children[0] ? null : e.target.classList.toggle("strong");
}

function treeHoverOut(e) {
    e.target.children[0] ? null : e.target.classList.toggle("strong");
}

element.append(div);

