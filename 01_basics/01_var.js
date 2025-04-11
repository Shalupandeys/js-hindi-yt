const accountId = 1223344   /*if const is used it means tht the value cant be changed*/
let accountEmail = "shalu@gmail.com"   /*if let is used then modification can be made */
var accPassword = "12345"     //can be modified //we usually dont use var,as it has the problem of scope,so we use let 
accountCity  = "Bangalore"     //can be modified //this method of initialising is not good ,but it is possible to do it withput using let or var
let accountState;     //if wejust declare any var without initialising then in js it is gives the value as "undefined" if we try to print

//accountId = 2 //as accountId is const so it cant be changed ,hence not allowed

accountEmail="hcac@gnail.com"
accPassword="12567"
accountCity = "Mumbai"

console.log(accountId);
console.log(accountEmail);
console.log(accPassword);
console.log(accountCity);

/*prefer not to use var
because of issue in block scope and functional scope*/

console.table([accountId,accountEmail,accPassword,accountCity,accountState])   //instead of printing everything separately we can print all together in tabular format



