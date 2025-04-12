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


//******************* OPERATIONS ********************

let val = 3
let negValue = -value       
//console.log(negValue);     //gives -3 as o/p

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);       // 2 raise to power 3
// console.log(2%3);

let str1 = "hello"
let str2 = " shalu"

let str3 = str1+str2
console.log(str3);     //o/p: hello shalu

//problem arises when we give 
console.log("1" + 2);      //o/p:12
console.log(1 + "2");      //o/p:12
console.log("1" + 2+2 );    //o/p: 122
console.log(1+2 + "2");     //o/p : 32
//he above conversions happens whr id string is in 1st the the values after tht is also treated in string ,and is string val is at last then the previous conversions with operators happens  

console.log((3+4) *5%3);     
// above format of writing is not entertained so avoid writing in such a way

//for above guidelines clarifictaion refer to ecmascript documentation 7.1.1 ToPrimitive and below

console.log(true);     //o/p :true
console.log(+true);     //o/p :1 
//console.log(true+);     //o/p :error
console.log(+"");     //o/p :0

let val1,val2,val3

val1=val2=val3=2+2    //these things may be avoided  and maintain code readability 

let gameCounter=100
gameCounter++;           //101 postfix  //check abt it in mdn docs
++gameCounter;           //101 prefix
console.log(gameCounter);   



//link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



