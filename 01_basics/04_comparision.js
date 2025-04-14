// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

//comparision of two diff datatypes in js  //this comparision may not always give correct results so it is preferred to use same datatypes
// console.log("2">1);         //true
// console.log("02">1);        //true


console.log(null > 0);         //false
console.log(null == 0);        //false
console.log(null >= 0);        //true
//the reason for the o/p is than an equality check == and comparisions > < >= <= work differently
//comparisions convert null to a number,treating it as 0. Thats y (3) null >= 0 is true and (1) null > 0 is false.  

//undefined gives false when compared with any operator 
console.log(undefined>=0);      //false
console.log(undefined<0);       //false
console.log(undefined==0);      //false

//Note : we  must always avoid conversion using "null" and "undefined"


// ===   :strict check =>done using === ,this not oly checks the value but also checks the datatype
console.log("2" >= 1);