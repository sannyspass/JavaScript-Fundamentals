function fruitChopper(fruit) {
  return fruit * 4;
}

function smoothieBlender(bananas, strawberries) {
  const bananaPieces = fruitChopper(bananas);
  const strawberryPieces = fruitChopper(strawberries);
  const blendedSmoothie = `This is a delicious smoothie made with ${bananaPieces} pieces of bananas and ${strawberryPieces} pieces of strawberries.`;
  return blendedSmoothie;
}

console.log(smoothieBlender(2, 3));
