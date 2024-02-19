function buyFruits(fruit, weightGrams, pricePerKg) {
    let weightKg = weightGrams / 1000;  
    let finalPrice = weightKg * pricePerKg;

    console.log(`I need ${finalPrice.toFixed(2)}lv. to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

buyFruits("orange", 2500, 1.80);
