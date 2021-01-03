function fibNumbers(num) {
    if (num === 2) {
        console.log(2);
        return;
    }
    let result = 1;
    let prev = 1;
    let prevPrev = 1;

    while (num > 2) {
        prevPrev = prev;
        prev = result;
        result = prev + prevPrev;
        num--;

    }

    console.log(result);
}

function recFibNumbers(num) {
    if (num < 3) {
        return 1;
    } 
    // console.log('recFibNumbers(num - 1) + recFibNumbers(num - 2)', recFibNumbers(num - 1), recFibNumbers(num - 2))
    return recFibNumbers(num - 1) + recFibNumbers(num - 2)
    
}

function printList(list) {
    let arr = [];
    let temp = list;

    while (list) {
        arr.unshift(list.value);
        list = list.next;
    }

    for (let i of arr) console.log(i);
}

function recursivePrintList(list) {
    list.next ? recursivePrintList(list.next) : null;
    console.log(list.value)
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  recursivePrintList(list);
  printList(list);