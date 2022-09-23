interface AnimalInterface{
    name: string;
    color:string;

    run()
    eat()
}
class Animal implements AnimalInterface{
    protected attrProtect: string;
    private attrPrivate: string;
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
        console.log('Eat how dog');

        //only see difference between protect and private
        super.attrProtect = 'i can access';
        //super.attrPrivate = 'i cant access';
    }
}

let bud : Dog = new Dog('Bud','black');
bud.eat();
bud.breed = 'PitBull';

//only see difference between protect and private
//bud.attrProtect = 'i cant access';
//bud.attrPrivate = 'i cant access';

