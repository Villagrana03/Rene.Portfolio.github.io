// const username = "";
// const password = "";

// function input(passwordOne){
//     try{
//         if(passwordOne === ""){
//             throw "please enter a password"
//         }
//         console.log("you typed your password")
//     }
//     catch(error){
//         console.log("can you please re type your password?")
//     }

// }

// input(password)




// let age = ["Michelle", "Valeria", "Sofia", "Estefania", "Mango"]

// const u = age.filter(e => {
//     return e[0] === "M"
// })

// console.log(u)



// const age = [23, 45, 12, 10];

// const sum = () => {
//    const result = age.reduce((prev, curr) =>{
//     return prev + curr
//    })
// }

// console.log(sum())



// // Callbacks

// //1.- we call add(2,4, logResult)
// //2.- add() function is working we sotred the result in the result variable
// //3.- after the sum is being completed, the callback will start insie of the callback we stored "result" AND we called the logResult function add(2,4, logResult), its like a combination
// //4.- after the add has been completed, since we called logResult() it will start working on that function "AFTER ADD() is completed"


// const add = (num1, num2, callback) => {
//     let result = num1 + num2
//     callback(result) // after the function is being "perfomed" it goes to the callback with result as a parameter
// }

// function logResult(result){
//     console.log(`The Result it's ${result}`)
// }

// add(2,4, logResult)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function callback(num){
//     return num % 2 === 0
// }

// const evenNumbersArray = numbers.filter(callback);
// console.log(evenNumbersArray);
// console.log("This is a synchronous code....")





// function multiplyCallback(num){
//     const result = num * 2;
//     console.log(`The input doubled is equal to ${result}`)
// }

// function doSomeMath(input, callback){
//     console.log("We are doubling the input number") 
//     callback(input)
// }

// doSomeMath(2, multiplyCallback) // 1.- step. we call the function the callback "multiplyCallback" we set it in the parameter after the message is being completed, we call the other function


function callbackFunc(){
    console.log("Executed last because we are using asynchronous code.")
}

setTimeout(callbackFunc, 2000);

console.log("executed first")
console.log("executed last")