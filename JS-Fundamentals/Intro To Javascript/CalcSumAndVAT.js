function calcSumAndVAT(priceArr){

    let sum=0;
    for (let price of priceArr) {
        sum+=price;
    }
    let vat=sum*0.2;
    let totalSum=vat+sum;

    console.log(`sum = ${sum}\nVAT= = ${vat}\ntotal = ${totalSum}`)

}
calcSumAndVAT([2,3,4,5,6,7]);
calcSumAndVAT([1.20, 2.60, 3.50]);

