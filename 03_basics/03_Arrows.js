// const user = {
//     username: "Alhamd",
//     price: 1000,
//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to the website`); 
//         console.log(this);
//     }
// }
// // user.welcomeMessage();
// // user.username = "Umar"
// // user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "Alhamd"
//     console.log(this);
// }
// chai()

// const chai = function () { 
//     let username = "Alhamd"
//         console.log(this.username);
//     }

// const chai = () => { 
// let username = "Alhamd"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,9));

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Alhamd"})
console.log(addTwo(3,9))