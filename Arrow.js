const user ={
    username: "swarup",
    price: 1000,

    welcomeprofile: function(){
        console.log(`${this.username}, welcome to profile price `);
    }
}
// user.welcomeprofile()

// console.log(this);

//console.log(this.username); // undefined
//user.welcomeprofile(); // welcome to profile price :1000,
// user.username = "ankur";
// user.welcomeprofile(); // welcome to profile price :1000,


// function momo(){
//     let username = "swarup";
//     console.log(this.username);
// }
// momo(); // window object

// const momo =  () => {    // arrow function
//     let username = "swarup";
//     console.log(this.username);
// }

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }



// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => (num1 + num2)//implesit return 

console.log (addTwo(2, 3)); // 5