/**Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog
 🐶 number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
4. Run the function for both test datasets
Test data:
§
 Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§
 Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
GOOD LUCK 😀 

const checkDogs = function (dogsJulia, dogsKate) {
  const shallowCopy = dogsJulia.slice(1, dogsJulia.length - 1);
  console.log(shallowCopy);

  const allDogs = shallowCopy.concat(dogsKate);
  console.log(allDogs);

  allDogs.forEach(function (dogAge, i) {
    if (dogAge >= 3)
      console.log(
        `Dog 🐶 number ${i + 1} is an adult, and is ${dogAge} years old`
      );
    else console.log(`Dog 🐶 number ${i + 1} is still a puppy`);
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/** Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§
 Data 1: [5, 2, 4, 1, 15, 8, 3]
§
 Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀 

// const calcAverageHumanAge = function (ages) {
//   let humanAge = ages;
//   console.log(ages);
//   ages.forEach(function (dogAge, i) {
//     humanAge[i] = dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
//     console.log(humanAge[i]);
//   });

//   return humanAge;
// };

// const removeDogsBelow18 = function (ages) {
//   let humanAge = ages;
//   for (let i = 0; i < ages.length; i++) {
//     if (humanAge[i] < 18) {
//       humanAge.splice(i, 1);
//       i--;
//     }
//   }
//   return humanAge;
// };

// let inArr = [5, 2, 4, 1, 15, 8, 3];

// humanAge = calcAverageHumanAge(inArr);
// console.log(humanAge);

// console.log(removeDogsBelow18(humanAge));
// console.log(humanAge);

// const avg = humanAge.reduce((acc, cur) => acc + cur, 0) / humanAge.length;
// console.log(avg);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
  const average = adults.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/** Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§
 Data 1: [5, 2, 4, 1, 15, 8, 3]
§
 Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀 

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, cur) => acc + cur / ages.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/** Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your1.2.3.4.5.6.7.8.tasks:
Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓
Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
Log to the console whether there is any dog eating an okay amount of food
(just true or false)
Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)

Hints:
Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
Test data:
const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] },
];
GOOD LUCK 😀*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const excatlyRecPortion = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

// dogs.forEach(dog => {
//   let sarahDogStr = 'Sarah dog is eating ';
//   // console.log(dog);
//   if (dog.owners.includes('Sarah')) {
//     if (excatlyRecPortion(dog))
//       sarahDogStr = sarahDogStr.concat('Okay Amount!');
//     else if (dog.curFood < dog.recFood * 0.9)
//       sarahDogStr = sarahDogStr.concat('Too Little!');
//     else sarahDogStr = sarahDogStr.concat('Too much!');
//     console.log(sarahDogStr);
//   }
// });
//2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? 'too much' : 'too little'
  }`
);

dogs.forEach(dog => {
  let isEating = '';
  // let sarahDogStr = 'Sarah dog is eating ';
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);

  if (dog.curFood < dog.recFood * 0.9) {
    ownersEatTooMuch.push(dog.owners);
    isEating = 'Too much!';
  } else {
    ownersEatTooLittle.push(dog.owners);
    isEating = 'Too little!';
  }
  console.log(`${dog.owners.join(' and ')} dog's is eating ${isEating}`);
});
console.log(dogs);

const logString = function (arr, muchOrLittle) {
  let dogOrDogs = '';
  dogOrDogs = 'dog';
  if (arr.length > 1) dogOrDogs = 'dogs';
  const str = arr.join(' and ').replaceAll(',', ' and ');
  return str.concat(`'s ${dogOrDogs} eats too ${muchOrLittle}`);
};

console.log(logString(ownersEatTooMuch, 'Much'));
console.log(logString(ownersEatTooLittle, 'Little'));

console.log(dogs.includes(excatlyRecPortion));
console.log(dogs.includes(excatlyRecPortion));

const dogsSorted = dogs.sort(dogs.recFood);
console.log(dogsSorted);

// 3.
ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too much`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
console.log(dogs.some(dog => excatlyRecPortion(dog)));

// 7.
console.log(dogs.filter(excatlyRecPortion));

// 8. Sort by recomend portion
// Create an copy array with slice
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);
