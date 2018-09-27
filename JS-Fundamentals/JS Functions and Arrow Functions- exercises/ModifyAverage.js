function modifyAverage(num) {

    let numberAsString = num.toString();

    let sum = function (num) {
        num = +num;
        let sum = 0;
        for (let element of num.toString()) {
            sum += +element;
        }
        return sum;
    };
    let average = sum(num) / numberAsString.length;

    while (average  <= 5) {

        numberAsString += `9`;
        average = sum(numberAsString) / numberAsString.length;
    }
    return numberAsString
}

console.log(modifyAverage(101));
console.log(modifyAverage(99));
console.log(modifyAverage(3));