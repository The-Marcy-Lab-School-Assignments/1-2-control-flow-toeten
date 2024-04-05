const measureRain = (inches) => {
  if (inches === 0) {
    console.log('drought')
  } else if (inches < 2) {
    console.log('dry')
  } else if (inches < 4) {
    console.log('average')
  } else if (inches < 6) {
    console.log('rainy')
  } else {
    console.log('flood')
  }
};

measureRain(0)
measureRain(2)
measureRain(3)

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    console.log('Hiss hiss!')
  } else if (breed === 'cat' && age < 5) {
    console.log('Mew mew!')
  } else if (breed === 'cat' && age >= 5) {
    console.log('Meow meow!')
  } else if (breed === 'dog' && age < 5) {
    console.log('Arf arf!')
  } else if (breed === 'dog' && age >= 5 && age < 10) {
    console.log('Woof woof!')
  } else if (breed === 'dog' && age >= 10) {
    console.log('Boof!')
  } else {
    console.log('Happy birthday!')
  }
};

happyBirthdayPet('snake', 0)
happyBirthdayPet('cat', 2)

const funTypes = (jsType) => {
  if (Number.isNaN(jsType)) {
    console.log("Well, now you're just showing off.");
  } else if (typeof jsType === "number") {
    console.log("That's a good number.");
  } else if (Array.isArray(jsType)) {
    console.log("I order you to be indexed.");
  } else if (jsType === null) {
    console.log("Nothing, and I did set that.");
  } else if (typeof jsType === "undefined") {
    console.log("Nothing, but I didn't set that.");
  } else if (typeof jsType === 'string') {
    console.log("That's just some text.")
  } else if (typeof jsType === "boolean") {
    console.log("To bool, or not to bool?");
  } else if (typeof jsType === "object") {
    console.log("Anybody got the key?");
  }
};
funTypes(NaN)
funTypes('cool string')
funTypes(5)
funTypes(true)
funTypes(["fruit", "vegetables", "minerals"])
funTypes(undefined)

const rounder = (float, roundingSetting) => {
  if (roundingSetting === 'up') {
    return Math.ceil(float)
  } else if (roundingSetting === 'down') {
    return Math.floor(float)
  } else if (roundingSetting === 'honest') {
    return Math.round(float)
  }
};
console.log(rounder(3.7, 'up'))
console.log(rounder(3.7, 'down'))
console.log(rounder(3.7, 'honest'))

const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzBuzz!")
  } else if (num % 3 === 0) {
    console.log("fizz")
  } else if (num % 5 === 0) {
    console.log("buzz")
  } else {
    console.log(num)
  }
}



module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
