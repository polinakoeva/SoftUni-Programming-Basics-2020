function catFood(input){

    let numberOfCats = Number(input[0]);
    let foodGram = Number(input[1]);
    let inputL = input.length;
    let index = 2;

    let Group1 = 0;
    let Group2 = 0;
    let Group3 = 0;
    
    for (let index = 2; index <= inputL; index++){
        let currentTab = input[index];
        
        if(currentTab >= 100){
            Group1++;
        } else if(currentTab >= 200){
            Group2++;  
        }else if(currentTab >= 300 && currentTab <= 400){
           Group3++;
        }
        foodPrice = (numberOfCats * foodGram * 12.45) / 1000;
    }
        console.log(`Group 1: ${Group1} cats.`);
        console.log(`Group 1: ${Group2} cats.`);
        console.log(`Group 1: ${Group3} cats.`);
        console.log(`Price for food per day: ${foodPrice} lv.`)

    

}
catFood(["6",
"102",
"236",
"123",
"399",
"342", 
"222"]);
