/*10. *Ски почивка

Атанас решава да прекара отпуската си в Банско и да кара ски. Преди да отиде обаче, трябва да резервира хотел и да изчисли колко ще му струва престоя. Съществуват следните видове помещения, със следните цени за престой:
§ "room for one person" – 18.00 лв за нощувка
§ "apartment" – 25.00 лв за нощувка
§ "president apartment" – 35.00 лв за нощувка
Според броят на дните, в които ще остане в хотела (пример: 11 дни = 10 нощувки) и видът на помещението, което ще избере, той може да ползва различно намаление. Намаленията са както следва:
вид помещение по-малко от 10 дни между 10 и 15 дни повече от 15 дни
room for one person не ползва намаление не ползва намаление не ползва намаление
apartment 30% от крайната цена 35% от крайната цена 50% от крайната цена
president apartment 10% от крайната цена 15% от крайната цена 20% от крайната цена
След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive) или негативна (negative) . Ако оценката му е позитивна, към цената с вече приспаднатото намаление Атанас добавя 25% от нея. Ако оценката му е негативна приспада от цената 10%.

Вход
Входът се чете от конзолата и се състои от три реда:
· Първи ред - дни за престой - цяло число в интервала [0...365]
· Втори ред - вид помещение - "room for one person", "apartment" или "president apartment"
· Трети ред - оценка - "positive" или "negative"

Изход
На конзолата трябва да се отпечата един ред:
· Цената за престоят му в хотела, форматирана до втория знак след десетичната запетая.*/

function skiHoliday(input) {
  let stayPeriod = Number(input.shift());
  let roomType = input.shift();
  let customerReview = input.shift();
  let roomPrice = 0;
  let tripPrice = 0;

  if (roomType === "single") {
    roomPrice = 18.0;
    stayPeriod = stayPeriod - 1;
    tripPrice = roomPrice * stayPeriod;
  } else if (roomType === "apartment") {
    roomPrice = 25;
    stayPeriod = stayPeriod - 1;
    if (stayPeriod <= 10) {
      tripPrice = roomPrice * stayPeriod * 0.7;
    } else if (stayPeriod > 10 && stayPeriod <= 15) {
      tripPrice = roomPrice * stayPeriod * 0.65;
    } else if (stayPeriod > 15) {
      tripPrice = roomPrice * stayPeriod * 0.5;
    } else {
      console.log("error1");
    }
  } else if (roomType === "presidentApartment") {
    roomPrice = 35;
    stayPeriod = stayPeriod - 1;
    if (stayPeriod < 10) {
      tripPrice = roomPrice * stayPeriod * 0.9;
    } else if (stayPeriod >= 10 && stayPeriod <= 15) {
      tripPrice = roomPrice * stayPeriod * 0.85;
    } else if (stayPeriod > 15) {
      tripPrice = roomPrice * stayPeriod * 0.8;
    } else {
      console.log("error2");
    }
  }

  if (customerReview === "positive") {
    tripPrice += tripPrice * 0.25;
  } else if (customerReview === "negative") {
    tripPrice -= tripPrice * 0.1;
  }

  console.log(tripPrice.toFixed(2));
}

skiHoliday([30, "presidentApartment", "negative"]);
