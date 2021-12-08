'use strict';

///////////////////////////////////////
/** Asynchronous JavaScript, Ajax and APIs */
// Synchronous code in long-running operations block some codes

// Asynchronous code is non-blocking and doesn't wait for a task to finish its work
// Callback functions alone do not make code asynchronous
// addEventListener does NOT automatically make code asynchronous

// AJAX -> Asynchronous JavaScript And XML: allows us to communicate with remote web servers in a asynchronous way. With Ajax calls, we can request data from webs ervers dynamically.

// API -> Application Programming Interface: piece of software that can be used by another piece of software, in order to allow applications to talk to each other.
// // "Online API": Application running on a server, that receives requests for data, and send data back as response;
// // We can build our own web APIs (requires back-end development, e.g. with node.js) or use 3rd-party APIs

// XML is not used anymore, AJAX is just the name. Usually the JSON data format will be used

/** Our first AJAX CAll: XMLHttpRequest */
//API: https://restcountries.com/v2/

/////////////////////////////////

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

/*
const getCountryAndNeighbour = function (country) {
  // Old School way - AJAX call country (1)
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;
    if (!neighbour) return;

    // Old School way - AJAX call country (1)
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      //   console.log(this.responseText);
      const data2 = JSON.parse(this.responseText);
      // console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');
// getCountryAndNeighbour('brasil');
getCountryAndNeighbour('usa');
*/
// CallBack Hell -> It happens when we have nested callbacks in order to execute asynchronous tasks in sequence. This happens in every asynchronous tasks handled by callbacks.
// Has a triangular shape
// It makes code hard to maintain and very difficult to understand
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//         setTimeout(() => {
//           console.log('5 second passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

/** Promises and the fetch API */
// Way to get around CallBack Hell
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

const request = fetch(`https://restcountries.com/v2/name/brasil`);
// console.log(request);

// Promise -> An object that is used as a palceholder for the future result of an asynchronous operation;
// A container for a future value.

/** Consuming Promises */
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       // Available on every response that come from fetch
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

//Simplified version
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // const neighbour = 'dsesfs';

      if (!neighbour) throw new Error('No neighbour found!');
      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
      // Promises always return something, and it will become the fullfilment value
      // return 23;
      // fetch(`https://restcountries.com/v2/alpha/${neighbour}`).then(response => response.json(); // DO NOT DO THIS, IT WILL GET BACK TO CHAINING HELL
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// Promises do not get rid of callback, but they do get rid of callback hell

/** Chaining Promises */

/** Handling Rejected Promises */
// btn.addEventListener('click', function () {
//   getCountryData('Brasil');
//   // getCountryData('Australia');
// });

// getCountryData('DSFSFS');

/** The Event Loop in Practice 
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promised 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  // Simulating a delayed/slow promise
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log('test end');
*/

/** Building a Simple Promise 
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter dreaw is happening!');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN!');
    } else {
      reject(new Error('You lost your money ):'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promissigyin setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// Callback hell for reference
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//         setTimeout(() => {
//           console.log('5 second passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Nice sequence of asynchronous behaviour, instead of the callback hell
wait(2)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2  seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3  seconds passed');
    return wait(1);
  })
  .then(() => console.log('4 seconds passed'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).then(x => console.error(x));
*/

/** Promissifying the Geolocation API */

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    // Same as above
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

// const whereAmI = function (lat, lng) {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       // console.log(pos.coords);
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok)
//         throw new Error(
//           `Something went wrong: ${res.status}. You can only make 3 requests per second`
//         );
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       getCountryData(data.country);
//     })
//     .catch(err => console.error(err));
// };

// btn.addEventListener('click', whereAmI);

/** Consuming Promises with Async/Await */
const whereAmI = async function (country) {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    // Country data
    // Using promises behind the scenes, the code above is the exat same as using .then()
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    // console.log(res);
    if (!res.ok) throw new Error('Problem getting location data');
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

// btn.addEventListener('click', whereAmI);
// whereAmI();
// whereAmI();
// whereAmI();

// console.log('FIRST');

/** Error Handling with Try..Catch */

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   console.error(err);
// }

/** Returning Values From Async Functions 
console.log('1: will get location');
// const city = whereAmI();
// console.log(city);

// This mixes ways to get promises with async wait, so we should not do that
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();
*/

/** RUnning Promises in Parallel 

const get3Countries = async function (c1, c2, c3) {
  try {
    // This doesn't make any sense, since the information order doesn't need to be the order below
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    // Helper function of promise constructor, that will run the promises at the same time
    // Run in parallel, but will curt circuit in case of error
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');
*/
/** Other promise Combinators: race, allSettled and any */
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/greece`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, sec * 1000);
  });
};

// Race - The first promise fullfiled is going to be returned
Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled -> like promise.all, but never curt circuit

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021] -- First fullfiled promies
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
