function greet () {
    console.log("Hello, World!");
}

//greet();

// add two numbers 

// function addTwoNumbers (number1, number2) {
//      console.log(number1 + number2);
// }
// addTwoNumbers(5, 10);


function addTwoNumbers (number1, number2) {
    //let result = number1 + number2;
    return number1 + number2;
}
const result = addTwoNumbers(5, 10);

// console.log("result:", result); 

function calculateCartprice(...num1){
    return num1;
}
console.log(calculateCartprice(1000 ,11232,121233,54211));