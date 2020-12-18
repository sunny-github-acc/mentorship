
// function sum(num) {
//     return function(num2) {
//         return num + num2;
//     }
// }

// sum(1)(2)


// function inBetween(a, b) {
//     return function(x) {
//         return x >= a && b >= x ? true : false;
//     }
// }

// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x);
//     }
// }


// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2



// function byField(str) {
//     return (a, b) => a.str > b.str ? 1 : -1;
// }

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

  

// function makeArmy() {
//     let shooters = [];
  
//     while (i < 10) {let i = 0;
//       let shooter = function() { // create a shooter function,
    
//         console.log( i ); // that should show its number
//       };
//       shooters.push(shooter); // and add it to the array
//       i++;
//     }
  
//     // ...and return the array of shooters
//     return shooters;
//   }
  
//   let army = makeArmy();
  
//   console.log('army.shooters', army[0]())


// function makeCounter() {
//     // instead of:
//     // let count = 0
  
//     function counter() {
//       return counter.count++;
//     };
  
//     counter.count = 0;
  
//     return counter;
//   }

  
//   let counter = makeCounter();

//   counter.set = (val) => counter.count = val;

//   counter.decrease = () => counter.count--;
  

//   counter()
//   console.log('counter()', counter())
//   counter.set(10)
//   console.log('counter.set(10)', counter.set(10))
//   counter.decrease()
//   console.log('counter.decrease()', counter.decrease())


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function sum(a) {
//     function b(b) {
//         return sum(a + b);
//     }
    
//     b.toString = () => a;

//     return b;
// }



// console.log(sum(1)(1)(3))

// let counter;

// function printNumbers(from, to) {
//     let count = from;

//     function go() {
//         function cons() {
//             console.log(count);
//             count++;
//             go();
//         }
//         count != to + 1 ? setTimeout(cons, 1000) : null;
//     }

//     go();
    
// }

//   // usage:
//   // printNumbers(5, 10);

// function printNumbersTimeOut(from, to) {
//     let current = from;

//     let timer = setInterval(function() {
//         console.log(current);
//         current === to ? clearInterval(timer) : null;
//         current++;
//     }, 1000)

// }


// printNumbersTimeOut(1, 4);


// function work(a, b) {
//     console.log( a + b ); // work is an arbitrary function or method
//   }
  
//   function spy(func) {

//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }

//     wrapper.calls = [];

//     return wrapper;
//   }

//   work = spy(work);
  
//   work(1, 2); // 3
//   work(4, 5); // 9
  
//   for (let args of work.calls) {
//     console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
//   }

// function f(x) {
//     console.log(x);
//   }
  
// function delay(func, ms) {
//     return function() {
//         setTimeout(() => func.apply(this, arguments), ms);
        
//     }
// }

//   create wrappers
//   let f1000 = delay(f, 1000);
//   let f1500 = delay(f, 1500);
  
//   f1000("test"); // shows "test" after 1000ms
//   f1500("test"); // shows "test" after 1500ms



// function f() {
//     console.log(":)");
// }

// function debounce(func, ms) {
//     let timeout;

//     return function() {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(this, arguments), ms)
//     }
// }

// f = debounce(f, 1000)

// f()


// // function f(a) {
// //     console.log(a);
// // }

// // function throttle(func, ms) {
// //     // 
// //     return setInterval(() => (func.apply(this, arguments)), arguments[1]);
// // }

// // // f1000 passes calls to f at maximum once per 1000 ms
// // let f1000 = throttle(f, 1000);

// // f1000(1); // shows 1
// // f1000(2); // (throttling, 1000ms not out yet)
// // f1000(3); // (throttling, 1000ms not out yet)

// // // when 1000 ms time out...
// // // ...outputs 3, intermediate value 2 was ignored



// function printNumbers(from, to) {
//     function repeat() {
//         console.log(from);
//         from++;
//         if (from < to + 1) {
//             go();
//         }
//     }

//     function go() {
//         setTimeout(repeat, 1000)
//     }

//     go();
// }

// function printNumbers(from, to) {
//     function counter() {
//         if (from === to + 1) {
//             clearInterval(timer);
//             return;
//         }  else {
//             console.log(from);
//             from++;
//         }
//     }
//     counter.count = from;

//     let timer = setInterval(counter, 1000)
// }


// printNumbers(1, 4)



// function work(a, b) {
//     console.log( a + b ); // work is an arbitrary function or method
//   }
  
// function spy(func) {
//     caller.calls ? null : caller.calls = [];

//     function caller(x) {
//         caller.calls.push([...arguments]);
//         return func.apply(this, arguments);
//     }


//     return caller;
// }

//   work = spy(work);
  
//   work(1, 2); // 3
//   work(4, 5); // 9
  
//   for (let args of work.calls) {
//     console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
//   }


// function f(x) {
//     console.log(x);
//   }

//   function delay(func, ms) {
      
//     return function() {
//         setTimeout(() => func.apply(this, arguments), ms);
//     }
//   }
  
//   // create wrappers
//   let f1000 = delay(f, 1000);
//   let f1500 = delay(f, 1500);
  
//   f1000("test"); // shows "test" after 1000ms
//   f1500("test"); // shows "test" after 1500ms


// function bounce() {
//     console.log(":)")
// }


// function debounce(func, ms) {
//     let timetout;

//     return function() {
//         clearTimeout(timetout);
//         timeout = setTimeout(() => (func.apply(this, arguments)), ms)
//     } 
// }

// bounce = debounce(bounce, 1000);

// bounce();



function f(a) {
    console.log(a);
  }

  function throttle(f, ms) {
      let isThrottled = false,
      savedArgs,
      savedThis;

      function wrapper() {
        
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

          f.apply(this, arguments);

          isThrottled = true;

          setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
          }, ms)
      }

      return wrapper;
  }


  
  // f1000 passes calls to f at maximum once per 1000 ms
  let f1000 = throttle(f, 1000);
  
  f1000(1); // shows 1
  f1000(2); // (throttling, 1000ms not out yet)
  f1000(3); // (throttling, 1000ms not out yet)
  f1000(4); // (throttling, 1000ms not out yet)