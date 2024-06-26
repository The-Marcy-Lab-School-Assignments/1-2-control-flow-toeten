/** FEEDBACK: Great job! */
const getRandomIntInRange = (min, max) => {
  if (min >= max) throw new Error('min must be less than max');
  return Math.floor(Math.random() * (max - min)) + min;
};
console.log(getRandomIntInRange(1, 5))

const coolnessGauge = (numOfFridges) => {
  return numOfFridges <= 3 ? 'You need more fridges.' : 'You are downright chilly!';
};
console.log(coolnessGauge(5))

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops <= 10) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops > 10 && numOfFunkoPops <= 20) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops > 20 && numOfFunkoPops <= 30) {
    console.log('You need help!');
  } else {
    console.log('You need an intervention!!!');
  }
};
funkoPopAddictionLevel(4)

const getWeatherReport = (temperature) => {
  let weatherReport = ""
  if (temperature > 90) {
    weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
  } else if (temperature > 70) {
    weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
  } else if (temperature < 32) {
    weatherReport = "Wow, it's cold out.";
    console.log(weatherReport)
  } else {
    weatherReport = "It's not too bad!"
    console.log(weatherReport)
  }
  console.log("And that's your report!")
  return weatherReport;
};
console.log(getWeatherReport(99))
/** FEEDBACK: Great use of conditionals here, you could've also used a ternary here. Your code would then look like this: 
const returnPositiveNegativeZero = (num) => {
  if (num === 0) return 'Zero';
  return (num < 1) ? 'Negative' : 'Positive';
};
 */
const returnPositiveNegativeZero = (num) => {
  if (num === 0) {
    return 'Zero'
  } else if (num < 0) {
    return 'Negative'
  } else if (num > 0) {
    return 'Positive'
  }
}
console.log(returnPositiveNegativeZero(0))
console.log(returnPositiveNegativeZero(-4))
console.log(returnPositiveNegativeZero(4))
//return num < 0
//? "Positive"
//: num === 0
//? "Zero"
//: "Negative";

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
