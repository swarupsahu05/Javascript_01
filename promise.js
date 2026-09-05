const promiseOne = new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log('task complete');
        resolve();// connected with .then 
    }, 1000);

});

promiseOne.then(function () {
    console.log("promise consumed");
});

new Promise (function (resolve, reject){
    setTimeout(function(){
        console.log("task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("async resolve");
})

const promiseThree = new Promise(function (resolve,reject){
    setTimeout(function (){
        resolve({username:"jalmuri",momo:"roll"})
    },1000)
} )

promiseThree.then(function (user){
    console.log(user)
})
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function (){
        let error = false 
        if (!error){
            resolve({username:"jalmuri",momo:"roll"})
        }else{
            reject:('Error: something went wrong' )
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then ((username)=>{
    console.log(username);
    
}).catch(function(ERROR){
    console.log(Error);
    
}).finally(()=>console.log("The promise is resolve or rejectectes"))

const promiseFive = new Promise(function(resolve, rejected){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username:"S.sahu",pass:"1234"})
        }else{
            rejected('Error: something went wrong')
        }
    },1000)
})
async function consumePromiseFive(){
   const response = await promiFive
   console.log(response);
   
}