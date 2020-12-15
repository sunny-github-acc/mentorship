// {let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__: head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };

//   console.log(pockets.glasses);}

// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach = [...this.stomach, food];
//     }
//   };
  
//   let speedy = {
//     __proto__: hamster
//   };
  
//   let lazy = {
//     __proto__: hamster
//   };
  
//   // This one found the food
//   speedy.eat("apple");
//   console.log(speedy.stomach); // apple
  
//   // This one also has it, why? fix please.
//   console.log(lazy.stomach); // apple

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms)
    }
    
}

function f() {
    alert("Hello!");
  }
  
  f.defer(1000); // shows "Hello!" after 1 second