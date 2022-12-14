import { celciusToFahrenheit, fahrenheitToCelsius } from "./converters.js";
import { millitoCenti, centitoMeter } from "./converters.js";
import nano from "./converters.js";
const buttonElement = document.getElementById("button");
buttonElement.addEventListener("click", clickme);

// function clickme() {
//   let element = document.getElementById("container");
//   element.innerHTML =` <h1>Boiling point is: ${celciusToFahrenheit(100)}</h1>
//   <h1>human body temperature 96.5F in celcius is ${fahrenheitToCelsius(98.6)}</h1>`;
// }
// console.log(`water boiling point is ${celciusToFahrenheit(100)} degree fahrenheit`);
// console.log(`human body temperature 96.5F in celcius is ${fahrenheitToCelsius}`);

function clickme() {
  let element = document.getElementById("container");
  element.innerHTML = `<h1> Boiling point is: ${celciusToFahrenheit(
    100
  )} & freezing point is: ${celciusToFahrenheit(0)},
    
        <br></br>
        100 milli meter is ${millitoCenti(100)} centi-meter,<br></br>
        1000 centi meters is ${centitoMeter(1000)} meter,<br></br>
        one nanometer is ${nano} meters.

    
  </h1>`;
}
