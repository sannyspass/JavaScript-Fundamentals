/*2. City

Receive five single strings.

Create a city object which will hold the city name, area, population, country and postcode.

Loop through all the keys and print them with their values in format: "{key} -> {value}"

The input will be in the following order: name, area, population, country and postCode.*/

const city = {
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postcode: 1000,
};

for (let key in city) {
  console.log(`${key}: ${city[key]}`);
}
