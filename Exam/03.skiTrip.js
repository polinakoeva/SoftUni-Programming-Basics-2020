function skiTrip(input) {
    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let priceForRoom = 0;

    switch (typeOfRoom) {

        case 'room for one person':
            priceForRoom = nights * 18;
            break;

        case 'apartment':
            if (nights < 10) {
                priceForRoom = (nights * 25) * 0.70;
            } else if (nights <= 15) {
                priceForRoom = (nights * 25) * 0.65;
            } else if (nights > 15) {
                priceForRoom = (nights * 25) * 0.50;
            }
            break;

        case 'president apartment':
            if (nights < 10) {
                priceForRoom = (nights * 35) * 0.90;
            } else if (nights <= 15) {
                priceForRoom = (nights * 35) * 0.85;
            } else if (nights > 15) {
                priceForRoom = (nights * 35) * 0.80;
            }
            break;

    }

    if (feedback === 'positive'){
        priceForRoom = priceForRoom * 1.25;

    }else if (feedback === 'negative') {
        priceForRoom = priceForRoom * 0.90;
    }
    console.log(priceForRoom.toFixed(2));





}
skiTrip
    (["14",
        "apartment",
        "positive"])
