/*2. Конзолен конвертор: от радиани в градуси 

Напишете програма, която чете ъгъл в радиани (radians) и го преобразува в градуси (degrees). 
Използвайте формулата: градус = радиан * 180 / π.Числото π в JavaScript програми е достъпно чрез Math.PI. 
Закръглете резултата до най-близкото цяло число използвайки "toFixed(0)".*/

function degreeConverter(input) {
  let radians = Number(input.shift());
  let degrees = (radians * 180) / Math.PI;
  let result = degrees.toFixed(0);

  console.log(result);
}

degreeConverter([3.1416]);
