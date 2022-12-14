// function celciusToFarenheit(celcius) {
//   return celcius * (9 / 5) + 32;
// }

// export old function

// module.exports.celciusToFarenheit = celciusToFarenheit;

// // declaring another function

// module.exports.celciusToFarenheit = function (fahreinheit) {
//   return (fahreinheit - 32) * (5 / 9);
// };

// first

export function celciusToFahrenheit(celcius) {
  return celcius * (9 / 5) + 32;
}

// second
export const fahrenheitToCelsius = function (fahreinheit) {
  return (fahreinheit - 32) * (5 / 9);
};
// export { celciusToFahrenheit, fahrenheitToCelsius };

// third function
const millitoCenti = (millimeter) => {
  return millimeter / 10;
};
// fourth function
const centitoMeter = (centimeter) => {
  return centimeter * 100;
};
// a plain variable
const nanoMeter = 0.0000000001;
export default nanoMeter;
// export {nanoMeter as default}

export { millitoCenti, centitoMeter };
