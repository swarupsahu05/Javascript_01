// console.log(Math.max(4, 6, 3 , 8 ));
// let min = 5;
// let max = 10;
// console.log (Math.floor(Math.random()* (max - min + 1) + min));

// let myArr = [1, 2, 3, 4];

// // myArr.push(5);

// // myArr.pop();
// myArr.unshift(0);


// console.log(myArr);

// let arr = [10, 20, 30, 40, 50];

// let result = arr.slice(1, 4);

// console.log(result);
// console.log(arr);

// let arr = [10, 20, 30, 40, 50];

// let removed = arr.splice(1, 2);

// console.log(removed);
// console.log(arr);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10], 11, 12, 13, 14, 15];

const real_anotherArr = anotherArr.flat(Infinity);
console.log(real_anotherArr);