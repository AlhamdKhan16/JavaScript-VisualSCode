let a = 3000
if (true) {
let a = 10
const b = 20
// console.log("INNER: ",a);

// var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
 const username = "Alhamd"

 function two(){
    const website = "Youtube"
   //  console.log(username); 
 }
//  console.log(website); 

 two()
}

one()

if (true) {
   const username = "Alhamd"
   if (username === "Alhamd") {
      const website = " Youtube"
      console.log(username + website);
   }
}

console.log(addone(5));
function addone(num) {
   return num + 1
}
addTwo(5)
   const addTwo = function(num){
      return num + 2
   }



