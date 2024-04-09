/** FEEDBACK: Great job getting these tests to pass however you are actually not using a guard clause. A guard clause is basically a specific condition that will exit the function. 
 * After using a guard clause you do not need an else condition since the function was exited!
 * This is what your code should have looked like instead: 
 * 
const wildlyBiasedReview = (location) => {
  if (location !== 'NYC') return console.log('Yea that place is cool I guess');
  console.log('THE GREATEST CITY IN THE WORLD');
  console.log('THE CITY THAT NEVER SLEEPS');
  console.log('WOW WHAT A CITY');
};
 */
const wildlyBiasedReview = (location) => {
  if (typeof location !== 'string') {
    return "Not a place"
  }
  if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
  } else {
    console.log('Yea that place is cool I guess');
  }
};

//console.log(wildlyBiasedReview(99))

module.exports = {
  wildlyBiasedReview,
};
