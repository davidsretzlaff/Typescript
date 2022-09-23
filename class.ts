interface AnimalInterface{
    name: string;
    color:string;

    run()
    eat()
}
class Animal implements AnimalInterface{
    // create constructor and create attributes of class
    constructor(public name:string, public color:string){
    }

    //function
    run(){
        console.log('running');
    }
    eat(){
        console.log('Eat')
    }
}

//using herança
class Dog extends Animal{
    breed: string;

    //overriding the eat method
    eat(){
        //super.eat call eat method from animal
        super.eat();

        console.log('Eat how dog')
    }
}

let bud : Dog = new Dog('Bud','black');
bud.Run();

// here i am saying that the variable is type Animal
let myAnimalType: Animal = new Animal('Dog','black');
