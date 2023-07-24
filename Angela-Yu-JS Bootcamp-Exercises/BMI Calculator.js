// BMI Calculator - weight / height

function bmiCalculator(weight, height) {
  let bmiResult = weight / Math.pow(height, 2);
  return Math.round(bmiResult);
}

bmiCalculator(65, 1.8);
