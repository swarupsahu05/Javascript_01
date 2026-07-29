const mySym = Symbol("key1");

const Jsuser = {
    name: "swarup",
    fullName: "swarup sahu",
    [mySym]: "mykey1",
    age: 21,
    location: "India",
    email: "swarup@google.com",
}

// console.log(Jsuser.name);
// console.log( Jsuser[mySym]);

// Jsuser.email = "swarrup@asusgmail.com";

// Jsuser.email = "swarup@mangogmail.com";
// Object.freeze(Jsuser);
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Jsuser");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());