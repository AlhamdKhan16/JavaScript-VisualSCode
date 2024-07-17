const accountId = 144553
let accountEmail = "alhamd@google.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;

// accountId = 2  //not allowed bcz it is const

accountEmail = "ak@kk.com"
accountPassword = "4567788"
accountCity = "Switzerland"


console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountEmail, accountPassword, accountCity, accountState])
