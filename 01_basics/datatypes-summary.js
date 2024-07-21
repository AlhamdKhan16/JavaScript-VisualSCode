//  # Primitive

//  7 types : String, Number, Null, Boolean, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

// const bigNumber = 2423536347783n


/* Reference type (Non Primitive)
    Array, Objects, Functions  
    Below are the examples in sequence :-
    */

    const heros = ["Shaktiman", "Perman", "Batman"];

    let myObj = {
        name : "Alhamd",
        age : 15,
    }

    const myFunction = function(){
        // console.log("Hello world");
    }

    // console.log(typeof score);
    // console.log(typeof scoreValue);
    // console.log(typeof isLoggedIn);
    // console.log(typeof outsideTemp);
    // console.log(typeof userEmail);
    // console.log(typeof id);
    // console.log(typeof heros);

//  **********************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myWhatsappname = "Alhamd Khan"
let anothername = myWhatsappname
// console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "alhamd@google.com"

console.log(userOne.email);
console.log(userTwo.email);

    

