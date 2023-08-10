/*8. * Аквариум

За рождения си ден Любомир получил аквариум с формата на паралелепипед. 
Първоначално приемаме, като вход размерите му – дължина, широчина и височина в сантиметри. 
Трябва да се пресметне, колко литра вода ще събира аквариума, ако се знае, че определен процент от вместимостта му е заета от пясък, растения, нагревател и помпа.
Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/.
Да се напише програма, която изчислява литрите вода, която са необходими за напълването на аквариума.*/

function aquarium(length, width, height, percent) {
  let volume = length * width * height;
  let capacityLitres = volume * 0.001;
  let availableCapacity = percent * 0.01;
  let finalCapacityLitres = capacityLitres * (1 - availableCapacity);

  console.log(
    `You aquarium will need ${finalCapacityLitres.toFixed(3)} litres of water.`
  );
}

aquarium(85, 75, 47, 17);
