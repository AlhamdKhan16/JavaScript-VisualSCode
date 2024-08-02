function sayMyName(){
    console.log("A");
    console.log("L");
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("D");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
        // let result = number1 + number2
        // console.log("Alhamd");
        // return result
        return number1 + number2
    }
const result = addTwoNumbers(3, 4)
// console.log("Result: ",result);

function loginUserMessage(username = "Umar"){
    if(!username){
        console.log("Please enter a username");
     return 
    }
    return username + " just logged in"
}
// console.log(loginUserMessage("Alhamd"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
   return num1
}
// console.log(calculateCartPrice(200, 345, 678, 20000))

let anyobject = {
    username: 'Alhamd',
    price: 99.99
  };
  
//   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

function handleObject(obj) {
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
  }
  
  handleObject({
    username: "Alhamd",
    price: 344
  });
  
  const myNewArray = [200, 300, 456, 789]
  function returnSecondValue(getArray){
    return getArray[1]
  }
//   console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 456, 789]));
  