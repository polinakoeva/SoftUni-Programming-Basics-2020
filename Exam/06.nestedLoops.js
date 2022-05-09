function nestedLoops(input) {

    let sum = 0;
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            for (let k = 0; k <= 9; k++) {
                sum = i + j + k;
                let numberAsString = `${i}${j}${k}`;
                let parsedNumber = Number(numberAsString);
                if (sum > 5 && parsedNumber % 2 === 0) {
                    console.log(parsedNumber);
                }
            }
        }
    }
}
nestedLoops();