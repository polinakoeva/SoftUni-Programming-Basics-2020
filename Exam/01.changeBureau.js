function changeBureau(input){

    let bitcoinsNumber = Number(input[0]);
    let chineseYuanNumber = Number(input[1]);
    let comission = Number(input[2]);

    let bitcoinsToLev = bitcoinsNumber * 1168;
    let chineseYuanToDollars = chineseYuanNumber * 0.15;
    let ChineseYuanToLev = chineseYuanToDollars * 1.76;

    let euro = (bitcoinsToLev + ChineseYuanToLev) / 1.95;
    let euroMinusComission = (euro * comission) / 100;
    
    let result = euro - euroMinusComission;
    console.log(result.toFixed(2));
    
    

}
changeBureau(["1",
"5",
"5"]);
