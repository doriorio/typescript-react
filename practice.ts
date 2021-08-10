//TODO: add to git ignore
//Types

//DATE
const today = new Date();
today.getMonth();

//OBJECT
const person = {
    age: 20
}

//Class
class Color {

}

const red = new Color();

let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let now: Date = new Date();
let colors: string[] = ['red', 'blue', 'green']
let myNums: number[] = [1,2,];
let truths: boolean[] = [true, false]

//Classes
// class Car {

// }
// let car: Car = new Car();

//Object literal
let point: { x:number, y:number} = {
    x: 10,
    y: 20
};

//Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

//When to use annotations
//1) function that returns the any type
//Specific to this example - TS assumes anything passed back from JSON.parse is any
const json = '{"x": 10, "y": 20}';
const coordinates : {x: number; y: number} = JSON.parse(json);
console.log(coordinates);

//2) When we declare on one line and initialze later
let words = ['red', 'green', 'blue'];

let foundWord: boolean;

words.forEach((word) =>{
    if (word == 'green') {
        foundWord = true;
    }
})
//3 when we want a variable to have a type that cannot be inferred even if declaration and initialization are on the same line
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

numbers.forEach((num) => {
    if (num > 0 ) {
        numberAboveZero = num;
    }
})

const add = (a: number, b: number): number => {
    return a + b;

}

function divide(a: number, b: number): number {
    return a/b;
}(): number => {
    return 1+1;
}

//Void type
const logger = (message: string): void => {
    console.log(message)
}

const throwError = (message: string): never => {
    throw new Error(message);
}

//Destructuring w annotations

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({ date, weather }: { date: Date, weather: string}) : void => {
    console.log(date);
    console.log(weather)
}

logWeather(todaysWeather);

//Objects
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { age, name }: { age: number, name: string } = profile;
const { coords: { lat, lng }} : { coords: { lat: number; lng: number}} = profile;

//Arrays
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

//For any type:
const anyType = [];

const dates = [new Date(), new Date()];

//2d array with type specificaton
const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

//Why specify type for arrays?
//Help with inference when extracting values
const myCar = carMakers[0];

//Prevent incompatible values
// carMakers.push(100)

//Autocomplete on string type provides string methods
carMakers.map((car:string): string => {
    return car.toUpperCase();
});

//Flexible - arrays can still contain multiple diff types with pipe |
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];

//When to use typed arrays
//Definition
//Any time we want to use a collection of records with some arbitrary sort order


/*   */
//Tuples
//Array-like structure
//Similar to object {color: brown, carbonated: true, sugar: 40} to [brown, true, 40] (the ordering is critical, because it is an ordered list)
//Object
const drink = {
    color: 'brown', 
    carbonated: true,
    sugar: 40
};

//Without any type annotated, these could easily come out of order and then we know longer know the keys for each value
const Pepsi = ['brown', true, 40];

//This makes it a tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];

//Another thing to do is to make a type alias
type Drink = [string, boolean, number];

const fanta: Drink  = ['clear', true, 30];
const tea: Drink = ['brown', false, 0];

//Tuples can be difficult for knowing what the different values represent at a glance

/* */
// Interfaces: creates a new type, describing the property names and value types of an object

//Has a function 
interface Reportable {
    // name: string;
    // year: Date;
    // broken: boolean;
    summary(): string;
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}
//A Vehicle can have more properties than defined in the interface
const oldCivic = {
    name: 'civic',
    year: new Date(2000),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

//Has a summary function like Reportable but also looks like a Drink above
const drink2 = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}
//Does not error
printSummary(drink2);


printSummary(oldCivic);

//Classes
class Vehicle {
    //Initialize the variable if not in constructor
    // color: string = 'red';

    constructor(public color: string) {
        this.color = color;
    }
    // color: string;


    protected honk (): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
//The below will throw an err because honk can't be referenced outside the class
// vehicle.honk();

// vehicle.drive();
// vehicle.honk();

//Inheirits all the methods/values of a Vehicle
//Can redefine methods
//Child class of Vehicle (parent Class)
//Private functions can't be used on the parent classes methods
class Car extends Vehicle {
    //Whenever a constructor is called inside a child class, the super method must be called - the constructor of the parent class
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log('vroom');
    }
    //StartDrivingProcess can call drive - it is private but can be called w/i this class
    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
//Can't be called since honk is protected
// car.honk();