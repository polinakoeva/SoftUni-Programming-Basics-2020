function demo(input) {

    let income = Number(input[0]);
    let averageSuccess = Number(input[1]);
    let minimalSelary = Number(input[2]);

    let socialScholarship = minimalSelary * 0.35;
    let excellentScholarship = averageSuccess * 25;

    if (income > minimalSelary) {
    console.log (`You cannot get a scholarship!`);
}
    if (averageSuccess < 5.50) {
        console.log(`You cannot get a scholarship!`);
    }

    else if (socialScholarship < excellentScholarship && averageSuccess >= 4.50) {
        console.log(`You get a social scholarship ${Math.floor(socialScholarship)} BGN`);
    }
    else if (averageSuccess >= 5.50) {
        console.log (`You get a scholarship for exellent results ${Math.floor(excellentScholarship)} BGN`);

    }
    else if (socialScholarship > excellentScholarship) {
        console.log (`You get a Social scholarship 147 BGN`);
    }

    }


demo (["480.00", "4.60", "450.00"]);