//The type annotation is :number, string, boolean.
let apples = 5;
//type inference
//(Will get the type any, because it doesnt know what type it is, 
//since i have only declared it but not initalizate).
// let apples; 
// apples = 5;

let speed: string ='fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, false, true];

//Classes
class Car{}
//^Refering to the type of class Car. 
let car: Car = new Car();

//Object literal, props n types
let point:{ x: number; y: number } = {
    x: 10,
    y: 20
}

//Function, everything up to void is annotation, description of the function, after = is the actual function.
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

//When to use annotation
//1)Function that returns the 'any' type.
const json = '{"x": 10, "y": 20}';
const coordinates:{x: number; y:number} = JSON.parse(json);
console.log(coordinates); // {x:10, y:20}

//2) When we declare a variable on one line
//and initalizate it later
let words = ['Red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}

//3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}
 
