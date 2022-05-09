function cinemaTicket(input) {
    let day = input[0];
    let price = Number(input[1]);

    switch (day) {
        case "Monday": 
        case "Friday":
        case "Tuesday": console.log("12"); break;
        case "Wednesday": 
        case "Thursday": console.log("14"); break;
        case "Saturday":
        case "Sunday": console.log("16"); break;
        default: console.log("Error"); break;

    }

}

cinemaTicket(["Sunday"]);