function toyShop(input) {
    let tripPrice = Number(input[0]);

    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let carsCount = Number(input[5]);

    let puzzlesPrice = puzzlesCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let bearsPrice = bearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let carsPrice = carsCount * 2;

    let totalPrice = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + carsPrice;

    let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + carsCount;

    if (toysCount >= 50) {
        totalPrice = totalPrice * 0.75
    }

    let moneyAfterRent = totalPrice * 0.90;


    if (moneyAfterRent >= tripPrice) {
        console.log(`Yes! ${(moneyAfterRent - tripPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(tripPrice - moneyAfterRent).toFixed(2)} lv needed.`);
    }



}
toyShop(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])