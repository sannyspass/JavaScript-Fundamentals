function bottlesOfBeer() {
  let bottleCount = 99;

  while (bottleCount >= 0) {
    let bottleWord = `bottles`;

    if (bottleCount === 1) {
      bottleWord = `bottle`;
    } else if (bottleCount === 0) {
      bottleWord = `bottles`;
    }

    if (bottleCount <= 0) {
      console.log(
        `No more bottles of beer on the wall, no more bottles of beer.`
      );
      console.log(
        `Go to the store and buy some more, 99 bottles of beer on the wall.`
      );
      break;
    } else {
      console.log(
        `${bottleCount} ${bottleWord} of beer on the wall, ${bottleCount} ${bottleWord} of beer.`
      );
      bottleCount--;
      console.log(
        `Take one down and pass it around, ${bottleCount} ${bottleWord} of beer on the wall.`
      );
    }
  }
}

bottlesOfBeer();
