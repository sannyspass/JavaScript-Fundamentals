/*7. Лица на фигури

Да се напише програма, в която получава като аргумент вида и размерите на геометрична фигура и пресмята лицето й. 
Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). 
На първия ред на входа се чете вида на фигурата (square, rectangle, circle или triangle). 
Ако фигурата е квадрат, на следващия ред се чете едно число - дължина на страната му. 
Ако фигурата е правоъгълник, на следващите два реда четат две числа - дължините на страните му. 
Ако фигурата е кръг, на следващия ред чете едно число - радиусът на кръга. 
Ако фигурата е триъгълник, на следващите два реда четат две числа - дължината на страната му и дължината на височината към нея. 
Резултатът да се закръгли до 3 цифри след десетичната точка.*/

function shapeFace(input) {
  let type = input.shift();

  if (type === "square") {
    let side = Number(input.shift());
    let area = side * side;

    console.log(`The face of the square is ${area.toFixed(3)}.`);
  } else if (type === "rectangle") {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let area = a * b;

    console.log(`The face of the rectangle is ${area.toFixed(3)}.`);
  } else if (type === "circle") {
    let r = Number(input.shift());
    let area = Math.pow(r, 2) * Math.PI;

    console.log(`The radius of the circle is ${area.toFixed(3)}.`);
  } else if (type === "triangle") {
    let length = Number(input.shift());
    let height = Number(input.shift());
    let area = (length * height) / 2;

    console.log(`The area of the triangle is ${area.toFixed(3)}.`);
  } else {
    console.log("Invalid input.");
  }
}

shapeFace(["triangle", "4.50", "20"]);
