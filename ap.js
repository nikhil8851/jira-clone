// let a1 = [1, 2, 3, 4, 5]
// let a2 = [6, 7, 8, 9, 10]

// let c = new set()

// c.add(a1,a2)

// console.log(c) // [1, 2, 3, 4, 5]
//  // [6, 7, 8, 9, 10]




let a1 = [1, 2, 3, 3, 5];
let a2 = [6, 2, 5, 9, 10];

let union = [...a1, ...a2];
let s = new Set(union);

console.log([...s]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]