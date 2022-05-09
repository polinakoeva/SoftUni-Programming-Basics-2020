function fitnessCenter(input) {
    let index = 0;
    let countPeople = Number(input[index]);
    index++;

    let counterBack = 0;
    let counterChest = 0;
    let counterLegs = 0;
    let counterAbs = 0;
    let counterProteinShake = 0;
    let counterProteinBar = 0;
    for(let i = 0; i < countPeople; i++){
        let activity = input[index];
        index++;
        switch(activity){
            case "Back": counterBack++; break;
            case "Chest": counterChest++; break;
            case "Legs": counterLegs++; break;
            case "Abs": counterAbs++; break;
            case "Protein shake": counterProteinShake++; break;
            case "Protein bar": counterProteinBar++; break;
        }

    }
    console.log(`${counterBack} - back`);
    console.log(`${counterChest} - chest`);
    console.log(`${counterLegs} - legs`);
    console.log(`${counterAbs} - abs`);
    console.log(`${counterProteinShake} - protein shake`);
    console.log(`${counterProteinBar} - protein bar`);

    let totalWorkPeople = counterBack + counterChest + counterAbs + counterLegs;
    let workProcentage = totalWorkPeople / countPeople * 100;

    console.log(`${workProcentage.toFixed(2)}% - work out`);
    
    let totalProteinPeople = counterProteinBar + counterProteinShake;
    let protein = totalProteinPeople / countPeople * 100;

    console.log(`${protein.toFixed(2)}% - protein`);

}

fitnessCenter([
    '10',
    'Back',
    'Chest',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar',
    'Protein shake',
    'Protein bar', 
    'Legs',
    'Abs']);