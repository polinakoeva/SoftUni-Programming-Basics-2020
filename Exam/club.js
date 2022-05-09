function club(input){
    let index = 0;
    let profit = Number(input[index]);
    index++;
    let income = 0;
    let command = input[index];
    index++;

    let isPartyCommand = true;

    while(command !== "Party!"){
        let name = command;
        let count = Number(input[index]);
        index++

        let drinksPrice = name.length * count;
        if(drinksPrice % 2 !== 0){
            drinksPrice = drinksPrice * 0.75
        }
        income += drinksPrice;

        if(income >= profit){
            isPartyCommand = false;
            break;
        }
        command = input[index];
        index++;

    }
    if(isPartyCommand){
        let diff = profit - income;
        console.log(`We need ${diff.toFixed(2)} leva more.`)
     }else{
        console.log("Target acquired.");
         }
         console.log(`Club income - ${income.toFixed(2)} leva.`);

}
club(["500",
"Bellini",
"6",
"Bamboo",
"7",
"Party!"]);

