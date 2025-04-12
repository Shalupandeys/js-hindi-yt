//let score=22
//let score="33"
let score="23abc"
//let score= null
//let score=undefined
//let score=true
//let score="shalu"

console.log(typeof score);
console.log(typeof(score));

let valInNum= Number(score)       //these data types are represented with starting letter as capital letter ,and indicates that the score var that is in String datatype is being converted to Number datatype 
console.log(typeof valInNum);     // this line converts and give the typeof valInNum as number  using the above line when input is "33abc" 
console.log(valInNum);            //here in js it converts and displays the type as number but its value is NaN(not a num)i.e.,it doesnt hve any value when score ="33abc"in start

//similarly if we initialise score=null then for console.log(valInNum) we get output as 0
//when score=undefined ,for console.log(valInNum) we get output as NaN after converting from string to number
//when score=true ,for console.log(valInNum) we get o/p as 1 and if initialised to false then we get o/p as 0
//if score ="hitesh" i.e., a String then we get o/p as NaN

//"33" => 33       //here "=>" indicates converts to
//"33abc" => NaN
//true => 1; false => 0


//conversion to Boolean
let isLoggedIn = 1         //o/p =>true
//let isLoggedIn = ""      //o/p => false
//let isLoggedIn = "shalu"      //o/p => true

let booleanIsLoggedIn =  Boolean(isLoggedIn)        //converting isLoggedIn=1 into Boolean dt and store in booleanIsLoggedIn
console.log(booleanIsLoggedIn);               //gives o/p as true as the value of "isLoggedIn=1"


//converting to String
let someNum=23               //o/p =>33 whose type is String 

let stringNum=String(someNum)
console.log(stringNum);
console.log(typeof stringNum);


