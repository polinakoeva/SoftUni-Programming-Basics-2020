function workingHours(input) {
    
    let time = Number(input[0]);
    let dayOfWeek = input[1];

    if (time >= 10 && time < 18) {
        
     switch (dayOfWeek){
        case "Monday": 
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": 
        case "Saturday":console.log("open"); break;
        case "Sunday": console.log("closed"); break;
        default: console.log("closed"); break;
    }
    
} else {
    console.log("closed");
}
    

}

workingHours(["11",
"Sunday"])


;
