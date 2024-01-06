'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const countriesCurrency = document.querySelector('.country__currency')

///////////////////////////////////////
// const getCountryData = function(country) {
// const request = new XMLHttpRequest();

// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function() {
//   // console.log(this.responseText)
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);
//   let arrCur = Object.values(data.currencies);
//   let arrCurrency;

//   arrCur.forEach(cur => {

//     arrCurrency = cur.name;
//   })


//   const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"> insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = '1';
//   `
// })
// };

// getCountryData('portugal');
// getCountryData('united states of america');
// getCountryData('nigeria');
// getCountryData('germany');
// getCountryData('ghana');

// const getCountryData = function(data) {

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${data}`);
// request.send();

// request.addEventListener('load', function(){
//   console.log(this.responseText)

//   const [data] = JSON.parse(this.responseText);
//   console.log(data)
//   // let countryCur, currency;

//   // countryCur = Object.keys(data.currencies);

//   // countryCur.forEach(cur => {
//   //   currency = cur[0].name;
//   // })

//   const html = `
//     <article class="country">
//       <img class="country__img" src= ${data.flags.png} />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
//         <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//       </div>
//     </article>
//   `

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = '1';
//   console.log(Object.values(data.currencies)[0].name)
// })
// }

// getCountryData('canada');
// getCountryData('portugal');
// getCountryData('nigeria');
// getCountryData('niger');
// getCountryData('wales');

// CALL BACK HELL
// const getCountryData = function(country) {
// const request = new XMLHttpRequest();

// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function() {
//   // console.log(this.responseText)
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);
//   let arrCur = Object.values(data.currencies);
//   let arrCurrency;

//   arrCur.forEach(cur => {

//     arrCurrency = cur.name;
//   })


//   const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"> insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = '1';
//   `
// })
// };

// getCountryData('portugal');
// getCountryData('united states of america');
// getCountryData('nigeria');
// getCountryData('germany');
// getCountryData('ghana');

// CALLBACK HELL
// Create a function for Adjacent HTML
// const insHTML =  function(data) {
//   const html = `
//     <article class="country">
//       <img class="country__img" src= ${data.flags.png} />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
//         <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//       </div>
//     </article>
//   `

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = '1';
//   console.log(Object.values(data.currencies)[0].name)

// }





const insHTML =  function(data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src= ${data.flags.png} />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0].name}</p>

        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
      </div>
    </article>
  `

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
  // console.log(Object.values(data.currencies)[0].name)

}

const errMessage = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = '1';
}


// const getNeigborCountry = function(data) {

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${data}`);
// request.send();

// request.addEventListener('load', function(){
//   // console.log(this.responseText)

//   const [data] = JSON.parse(this.responseText);
//   console.log(data)

//   // Rendering country one
//   insHTML(data);

//   // Get Neigbor Country
//   const [neigbor] = data.borders;

//   // if(!neigbor) return;

//   console.log(neigbor)
//   const request2 = new XMLHttpRequest();
//   request2.open('GET', `https://restcountries.com/v2/alpha/${neigbor}`);
//   request2.send();

//   request2.addEventListener('load', function(){
//     const data2 =- JSON.parse(this.responseText);
//     console.log(data2)

//     insHTML(data2, 'neighbour')


//     // Get Second Neigbor Country
//     const neigbor2 = data.borders[1]
//     console.log(neigbor2)
//     const request3 = new XMLHttpRequest();
//     request3.open('GET', `https://restcountries.com/v2/alpha/${neigbor2}`);
//     request3.send();

//     request3.addEventListener('load', function(){
//       const data3 = JSON.parse(this.responseText)
//       console.log(data3)

//       insHTML(data3, 'neighbour')
//     })
//   })
// })
// }

// getNeigborCountry('benin');


// USING PROMISES
// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data[0])
//     insHTML(data[0])
//   })
// }

// Simplifying our promises code
// const getCountryData = country => {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//   .then(response => {
//     // console.log(response)
    
//     if(!response.ok) {
//       throw new Error(`Country not found ${response.status}`)
//     }
//     return response.json()

//   })
//   .then(data => {
//     insHTML(data[0]);

//     // Neigbour Courtry
//     const neighbour = data[0].borders[0];

//     if(!neighbour) return;

//     return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//   }).then(response => response.json())
//   .then(data => 
//     {
//       insHTML(data, 'neighbour');

//       const nextN = data.borders[0]
//     // console.log(data.borders[0])
//       return fetch(`https://restcountries.com/v2/alpha/${nextN}`)
//     }).then(response => response.json())
//     .then(data => insHTML(data, 'neighbournxt'))
//     .catch(err => errMessage(`Something went wrong ${err.message}`))
// }


// btn.addEventListener('click', () => {
//   getCountryData('germany');

// });
  // getCountryData('ijebu');


  ///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// SOLUTION 
// const whereAmI = (lat, lng) => {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   .then(response => {
//     // console.log(response)
//     // if(response.ok) throw new Error( `Problem with geocoding ${response.status}`);
//     return response.json()
//   })
//   .then(data => {
//     console.log(data)
//     console.log(`You are in ${data.city}, ${data.country}`)

//     return fetch(`https://restcountries.com/v2/name/${data.country}`)
//   })
//   .then(response => {
//     if(!response.ok) {
//       throw new Error(`Country not found ${response.status}`)}
//     return response.json()
//   })
//   .then(data => insHTML(data[0]))
//   .catch(err => alert(err))
// }
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

console.log('Test Start')
console.log(setTimeout(() => console.log('0 sec timer'), 0))
Promise.resolve('I love you').then(res => console.log(res))
console.log('Test end')