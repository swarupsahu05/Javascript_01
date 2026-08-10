// let a = 10 
// const b = 20 
// var c = 30

// let a = 10

// if (true)  {
//    let a = 100;
//    const b = 200;
//    console.log("inner block a:", a);
// }//scope block



// console.log(a);
// console.log(b);
// console.log(c);// 

function one (){
    const username = "swarup";

    function two (){
    const password = "1234";

    console.log("username:", username);
    }

    console.log("username:", username);
    //two();
}

one();