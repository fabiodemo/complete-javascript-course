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
btn.addEventListener('click', function () {
  // getCountryData('Brasil');
  getCountryData('Australia');
});

// getCountryData('DSFSFS');
