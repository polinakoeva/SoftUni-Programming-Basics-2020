function snooker(input) {

    let stage = input[0];
    let typeOfTicket = input[1];
    let numberOfTickets = Number(input[2]);
    let picture = input[3];

    let firstTotal = 0;

    switch (stage) {

        case 'Quarter final':
            if (typeOfTicket === 'Standard') {
                firstTotal = numberOfTickets * 55.50;
            } else if (typeOfTicket === 'Premium') {
                firstTotal = numberOfTickets * 105.20;
            } else if (typeOfTicket === 'VIP') {
                firstTotal = numberOfTickets * 118.90;
            }
            break;
        case 'Semi final':
            if (typeOfTicket === 'Standard') {
                firstTotal = numberOfTickets * 75.88;
            } else if (typeOfTicket === 'Premium') {
                firstTotal = numberOfTickets * 125.22;
            } else if (typeOfTicket === 'VIP') {
                firstTotal = numberOfTickets * 300.40;
            }
            break;
        case 'Final':
            if (typeOfTicket === 'Standard') {
                firstTotal = numberOfTickets * 110.10;
            } else if (typeOfTicket === 'Premium') {
                firstTotal = numberOfTickets * 160.66;
            } else if (typeOfTicket === 'VIP') {
                firstTotal = numberOfTickets * 400;
            }
            break;
    }
    let secondTotal = 0;

    if (firstTotal > 4000) {
        secondTotal = firstTotal * 0.75;

    } else if (firstTotal > 2500 && firstTotal <= 4000) {
        if (picture === 'Y') {
            secondTotal = firstTotal * 0.90;
            secondTotal = secondTotal + (numberOfTickets * 40);
        } else {
            secondTotal = firstTotal * 0.90;
        }
} else if (firstTotal <= 2500) {
    if (picture === 'Y') {
        secondTotal = firstTotal;
        secondTotal = secondTotal + (numberOfTickets * 40);
    } else {
        secondTotal = firstTotal;
    }
}
console.log(secondTotal.toFixed(2));


}
snooker(["Final",
    "Premium",
    "25",
    "Y"]);
