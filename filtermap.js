// const coding = ["html", "css", "javascript", "react", "nodejs", "expressjs"];

// const values = coding.forEach((item)=>{
//     //console.log(item)
//     return item;
// })

// console.log(values);

//Filter operation 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//     return num > 4; // Because when you use { } with an arrow function, you need an explicit return:
// })
// console.log(newNums);

// const newNums = [];

// myNums.forEach((num) => {
//     if (num > 4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);

// const newNums = myNums.map((num)=> num + 11)
// const newNums = myNums.map((num)=> {return num + 11})
// console.log(newNums);

// const newNums = myNums.map((num)=> num *10)
//                     .map((num) => num +1)
//                     .filter((num)=> num >= 50)

// console.log(newNums);

// const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function(acc, currVal) {
//     console.log(`acc: ${acc}, currVal: ${currVal}`);
//     return acc + currVal;
// }, 0);

// console.log(myTotal);


const shoppingCart = [
    {
        item: "phone",
        price: 699,
        quantity: 1
    },
        {
        item: "Laptop",
        price: 1299,
        quantity: 1
    },
        {
        item: "headphones",
        price: 599,
        quantity: 1
    },
        {
        item: "monitor",
        price: 299,
        quantity: 1
    },
]
          

 const priceTopay = shoppingCart.reduce((acc, item)=> acc + item.price,0)
 console.log(priceTopay);