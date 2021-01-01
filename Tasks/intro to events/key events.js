'use strict';

let set = new Set();
function runOnKeys(func, ...codes) {
    document.addEventListener("keydown", handleThis);

    function handleThis(e) {
        set.add(e.code);
        for (let i of codes) {
            if (!set.has(i)) return setTimeout(() => set = new Set(), 500);
        }
        func();
    }
}

runOnKeys(
    () => alert("Hello!"),
    "KeyQ",
    "KeyW",
    "KeyE"
  );