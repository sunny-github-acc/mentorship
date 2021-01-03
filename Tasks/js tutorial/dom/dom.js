let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

let div = document.createElement("div");
document.body.append(div);

function createTree(container, obj) {
  let innerHTMLStr = "";

  function adder(obj) {
    innerHTMLStr += "<ul>"
      for (let i of Object.keys(obj)) {
        innerHTMLStr += `<li>${i}`;

        if (Object.keys(obj)) {
          adder(obj[i])
        }
      }
    
      innerHTMLStr += "</li></ul>";
  }

  adder(obj);
  
  container.innerHTML = innerHTMLStr;
}

// createTree(div, data);

function treeNodes(container, obj, isFirst = true) {
  let ul = document.createElement("ul");

  for (let i of Object.keys(obj)) {
    let li = document.createElement("li");
    li.innerHTML = i;
    ul.append(li);
    if (Object.keys(obj[i]).length) {
      treeNodes(li, obj[i], false);
    }

  }
  container.append(ul);
  isFirst ? document.body.append(container) : null;
}

// treeNodes(div, data);
