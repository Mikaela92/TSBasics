const add = (a:number, b:number):number => {
    return a + b;
}

const subtract = (a: number, b: number) => {
 a-b;
}

function divide (a: number, b:number): number{
    return a/b;
}

//Annonymus function assigned to a variable
const multiply = function(a: number, b: number): number{
    return a*b;
}

//Void can return null and /or undefined.
const logger = (message: string):void => {
    console.log(message);    
}

const throwError = (message: string):never => {
    throw new Error (message);
}

const todaysWeather = {
    date: new Date(),
    weather: 'Sunny'
}

//Destructuring and annotation.
const logWeather = ({date, weather}: {date: Date, weather: string}): void =>{
    console.log(date)
    console.log(weather);
};



logWeather(todaysWeather);