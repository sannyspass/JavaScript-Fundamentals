function calcAverage(score1, score2, score3) {
  const averageScore = (score1 + score2 + score3) / 3;
  return averageScore;
}

const scoreDolphins = calcAverage(85, 54, 41);

const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins.");
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// Arrow Function Mode
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
