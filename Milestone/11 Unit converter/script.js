
function celToFah(celsius) {
    const fahrenheit = ((celsius * (9/5)) + 32);
    return fahrenheit;
}

const temperatureInCelsius = 37;
const convertedFahrenheit = celToFah(temperatureInCelsius);
console.log(`${temperatureInCelsius} Celsius = ${convertedFahrenheit} Fahrenheit`);
