function mountainRun(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeter = Number(input[2]);
    
    let totalTime = distance * timeForOneMeter;
    let delay = Math.floor(distance / 50);
    let extraTime = delay * 30;
    let georgisTime = totalTime + extraTime;
    
    if(georgisTime < record){
        console.log(`Yes! The new record is ${georgisTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No! He was ${(georgisTime - record).toFixed(2)} seconds slower.`)
    }
    
   

}
mountainRun(["5554.36",
"1340",
"3.23"])

