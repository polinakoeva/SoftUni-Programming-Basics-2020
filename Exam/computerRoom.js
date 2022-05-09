function computerRoom(input) {

    let month = input[0];
    let hours = Number(input[1]);
    let people = Number(input[2]);
    let timeOnTheDay = input[3];

    let price = 0;
    
   
    switch (timeOnTheDay) {

        case 'day':
            if (month === 'march' || month === 'april' || month === 'may') {
                price = hours * 10.50;
            } else if (month === 'june' || month === 'july' || month === 'august') {
                price = hours * 12.60;
            }
            break;

        case 'night':
            if (month === 'march' || month === 'april' || month === 'may') {
                price = hours * 8.40;
            } else if (month === 'june' || month === 'july' || month === 'august') {
                price =  hours * 10.20;
            }
            break;
    }
    let priceForOnePerson = (people * hours) / price;

    if (people >= 4) {
        priceForOnePerson = priceForOnePerson * 0.90;


    } else if (hours >= 5) {
        priceForOnePerson = priceForOnePerson / 2;
    }
    
    let totalPrice = (priceForOnePerson * people) * hours;

    console.log(`Price per person for one hour: ${priceForOnePerson.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)} `);

}

computerRoom(["july",
    "5",
    "5",
    "night"]);

