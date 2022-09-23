let myArray: Array<number> = [];

/*
fun<T> = type that i will work in the function
(param: T) = sets the parameter type 
: T = sets the return type
*/
function fun<T>(param: T): T{
    return param;
}

let variableString : string = fun<string>('2');
let variableNumber : number = fun<number>(2);

class List<T>{
    items = [];

    add(item:T){

    }
    remove(item:T){

    }
}

let listNumber = new List<number>();
listNumber.add(1);
listNumber.add(2);

let listString = new List<string>();
listString.add('item 1');
listString.add('item 2');
