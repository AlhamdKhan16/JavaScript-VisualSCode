const user = {
    username: "Alhamd",
    price: 1000,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`); 
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Umar"
// user.welcomeMessage();
console.log(this);

function chai(){
    let username = "Alhamd"
    console.log(this);
}
chai()