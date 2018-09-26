function aggregateElements(nums) {

    function sumAll() {

        let sum = 0;
        for (let num of nums) {
            sum += num;
        }
        return sum;
    }

    function sumInversedValues() {
        let inversedSum = 0;
        for (let num of nums) {

            let currentElement = 1 / num;
            inversedSum += currentElement;
        }
        return inversedSum;
    }

    function concatAll() {
        let concatenation = ``;
        for (let num of nums) {

            concatenation += num;
        }
        return concatenation;
    }

    console.log(sumAll());
    console.log(sumInversedValues());
    console.log(concatAll());

}
aggregateElements([1,2,3]);