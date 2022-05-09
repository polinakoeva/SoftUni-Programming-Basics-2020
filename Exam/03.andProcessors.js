function andProcessors (input){
    let processors = Number(input[0]);
    let employees = Number(input[1]);
    let workingDays = Number(input[2]);

    let totalHours = workingDays * employees * 8;
    let totalProcessors = parseFloat(totalHours / 3);

    let difference = processors - totalProcessors;
    let losses = difference * 110.10;
    let profit = totalProcessors * totalHours;

    if (totalProcessors >= processors){
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`)
    }else{
        console.log(`Losses: -> ${losses.toFixed(2)} BGN`)
    }


}
andProcessors(["500",
    "8",
    "20"])