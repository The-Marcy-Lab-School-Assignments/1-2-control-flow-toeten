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
