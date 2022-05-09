function oscarCeremmony(input){
    let rent = Number (input[0]);
    let statuettePrice = rent * 0.70;
    let catering = statuettePrice * 0.85;
    let sound = catering / 2;

    console.log((rent + statuettePrice +catering + sound).toFixed(2));


}
oscarCeremmony(["3500"]);