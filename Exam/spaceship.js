function spaceship(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let averageHeighOfTheAstronauts = Number(input[3]);

    let rocketVolume = w * l * h;
    let roomVolume = (averageHeighOfTheAstronauts + 0.40) * 2 * 2;
    let astronauts = Math.floor(rocketVolume / roomVolume);

    if (astronauts >= 3 && astronauts <= 10) {
        console.log(`The spacecraft holds ${astronauts} astronauts.`);
    }
    if (astronauts < 3) {
        console.log('The spacecraft is too small.');
    }
    if (astronauts > 10) {
        console.log('The spacecraft is too big.')
    }

}
spaceship(["3.5",
    "4",
    "5",
    "1.70"]);
