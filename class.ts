class Animal {
    /*
    name:string;
    color:string;

    // bad away
    constructor(name:string, color:string){
        this.name = name;
        this.color = color;
    }
    */
    
    // good away
    constructor(public name:string, public color:string){
        
    }
}

let myAnimal = new Animal('Dog','black');

// here i am saying that the variable is type Animal
let myAnimalType: Animal = new Animal('Dog','black');
myAnimal.name;
