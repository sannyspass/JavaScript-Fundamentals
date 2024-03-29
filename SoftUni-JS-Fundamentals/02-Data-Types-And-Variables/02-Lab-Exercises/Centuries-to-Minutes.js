/*7. Centuries to Minutes

Write program to receive a number of centuries and convert it to years, days, hours and minutes.

Examples

Input Output

1 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes

5 5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes

Hint · Assume that a year has 365.2422 days at average (the Tropical year).*/

function centuries(input) {
  let century = Number(input.shift());
  let years = century * 100;
  let days = Math.trunc(years * 365.2422);
  let hours = days * 24;
  let minutes = hours * 60;

  console.log(
    `century = ${century}, years = ${years}, days = ${days}, hours = ${hours}, minutes = ${minutes}`
  );
}

centuries([1]);
