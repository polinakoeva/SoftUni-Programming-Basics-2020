function renovation(input) {

   let height = Number(input[0]);
   let width = Number(input[1]);
   let percent = Number(input[2]);

   let sum = height * width * 4;

   sum = sum - (sum * (percent / 100));
   let index = 3;

   let litters = input[index++];

   while (litters !== 'Tired') {
      sum -= Number(litters);

      if (sum <= 0) {
         break;
      }
      litters = input[index++];
   }
   if (sum < 0) {
      console.log(`All walls are painted and you have ${Math.abs(sum)} l paint left!`);
   } else if (sum === 0) {
      console.log(`All walls are painted! Great job, Pesho!`);
   } else {
      console.log(`${sum} quadratic m left.`);
   }

}
renovation(["3",
   "5",
   "10",
   "2",
   "3",
   "4",
   "Tired!"]);
