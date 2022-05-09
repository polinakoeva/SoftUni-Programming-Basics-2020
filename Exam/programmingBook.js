function programmingBook(input) {
    let priceForOnePage = Number(input[0]);
    let priceForOneCover = Number(input[1]);
    let discountPaperPrint = Number(input[2]);
    let designerSalary = Number(input[3]);
    let persentTotalSum = Number(input[4]);
    let numberOfPages = 899;
    let numberOfCovers = 2;

    let amountForPrinting = (priceForOnePage * numberOfPages) + (priceForOneCover * numberOfCovers);
    let costsAfterDiscount = amountForPrinting - (discountPaperPrint/100);
    let sumWithDesigner = costsAfterDiscount + designerSalary;
    let money = sumWithDesigner - (persentTotalSum/100);

    console.log(`Avtonom should pay ${money.toFixed(2)} BGN.`)

}
programmingBook("0.01",
    "1",
    "10",
    "20",
    "20")