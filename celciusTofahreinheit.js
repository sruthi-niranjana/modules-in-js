function celciusToFarenheit(celcius){
    return celcius*(9/5)+32;
}
const celciusInput = process.argv[2];
const fahrenheit=celciusToFarenheit(celciusInput);
console.log(`${celciusInput} degree celcius=${fahrenheit}degree fahreinheit`);