// Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = (birthyear) => 2037 - birthyear;
// console.log(x);
// console.log(calcAge(1991));
//BUG
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // 3 - FIX
    value: Number(prompt("Degree celsius: ")),
  };

  // 2 - Bug found
  console.log(measurement);
  console.table(measurement); //log object as a table
  //   console.warn(measurement.value); //Warning
  //   console.error(measurement.value); //Errors
  const kelvin = measurement.value + 273;
  return kelvin;
};
//1 - Identity
console.log(measureKelvin());*/

/** Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§
 Data 1: [17, 21, 23]
§
 Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀 */

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}oC in ${i + 1} days`);
  }
};

// const maxTemp = [17, 21, 23];
const maxTemp = [12, 5, -5, 0, 4];
printForecast(maxTemp);
