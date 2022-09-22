let myName: any = "david retzlaff";

// same thing
let count = (<string>myName).length;
let count = (myName as string).length;

let num:number = 2;

// convert number to string
let numString = num + "";
console.log(typeof numString);
// result string

let stringNum: string = "123";
// convert string to number
let num2 = +stringNum;
console.log(typeof num2);
// result number
console.log(num2);
//result -123