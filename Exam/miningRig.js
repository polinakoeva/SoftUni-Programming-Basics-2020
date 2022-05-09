function miningRig(input) {

    let priceForOneVideoCard = Number(input[0]);
    let priceForOneAdapter = Number(input[1]);
    let priceForElectricityPerDay = Number(input[2]);
    let profitFromOneCardPerDay = Number(input[3]);

    let priceForAllCard = priceForOneVideoCard * 13;
    let priceForAllAdapter = priceForOneAdapter * 13;
    let totalMoneySpent = priceForAllCard + priceForAllAdapter + 1000;

    let profitFromCard = profitFromOneCardPerDay - priceForElectricityPerDay;
    let totalProfitPerDay = 13 * profitFromCard;
    let daysToReturn = Math.ceil(totalMoneySpent / totalProfitPerDay);

    console.log(totalMoneySpent);
    console.log(daysToReturn);

}
miningRig(["700",
    "15",
    "0.20",
    "2"]);
