//functions declarations
const sum = function (x:number, y:number): number{
    return x+y;
};
//return number
let num:number = sum(2,3);

// void = empty
const sum = function (x:number, y:number): void{
    return x+y;
};

// if return not was declare so return is type void
const sum = function (x:number, y:number){
    return x+y;
};

// arrow function
const sumSimply = (x:number, y:number): number =>{
    return x+y;
};

// arrow function and short
const sumSimply = (x:number, y:number): number => return x+y;

let funcshort = name => `david retzlaff ${name}`;
let funcOptionParameters = (firstName: string, lastName?:string) => {
    // check if variable is undefined
    if(typeof lastName == 'undefined'){

    }
}