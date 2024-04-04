// const {
//   measureRain,
const measureRain = (inches) => {
    switch (true) {
        case inches === 0:
            console.log('drought');
            break;
        case inches < 2:
            console.log('dry');
            break;
        case inches < 4:
            console.log('average');
            break;
        case inches < 6:
            console.log('rainy');
            break;
        default:
            console.log('flood');
    }
};

measureRain(2)
//   happyBirthdayPet,
//   funTypes,
//   rounder,
//   fizzBuzzish,
// } = require('./from-scratch');
// const {
//   getRandomIntInRange,
//   coolnessGauge,
//   funkoPopAddictionLevel,
//   getWeatherReport,
//   returnPositiveNegativeZero,
// } = require('./debug');
// const { wildlyBiasedReview } = require('./modify');





//FizzBuzz: Write a function that takes in a number: 
//if the number is divisible by three, return "Fizz"
//if the number is divisible by 5, return "Buzz"
//if divisible by 3 and by 5, return "FizzBuzz"

const fizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz"
    } else if (number % 3 === 0) {
        return "Fizz"
    } else if (number % 5 === 0) {
        return "Buzz"
    } else {
        return "Not divisible by 3 OR 5."
    }
}

console.log(fizzBuzz(10))
console.log(fizzBuzz(23))
console.log(fizzBuzz(9))
console.log(fizzBuzz(15))


const funTypes = (jsType) => {
    if (typeof jsType === 'string') {
        console.log("That's just some text.");
    } else if (typeof jsType === 'number') {
        console.log("That's a good number.");
    } else if (typeof jsType === 'boolean') {
        console.log("To bool, or not to bool?");
    } else if (typeof jsType === 'undefined') {
        console.log("Nothing, but I didn't set that.");
    } else if (jsType === null) {
        console.log("Nothing, and I did set that.");
    } else if (typeof jsType === 'object') {
        if (Array.isArray(jsType)) {
            console.log("I order you to be indexed.");
        } else {
            console.log("Anybody got the key?");
        }
    } else if (isNaN(jsType)) {
        console.log("Well, now you're just showing off.");
    }
};

funTypes(NaN)
funTypes('cool string')
funTypes(5)
funTypes(5 === 5)
funTypes(["fruit", "vegetables", "minerals"])
funTypes(undefined)