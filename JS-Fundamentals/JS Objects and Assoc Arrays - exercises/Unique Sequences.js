function getUniqueSequences(input) {
    let obj = {};
    let arraysLengthData = [];

    function removeTrailingZeroes(array) {

        let arrCopy = [];
        for (let i = 0; i < array.length; i++) {

            let currentElement = array[i];
            let noZeroes = currentElement.toString();
            noZeroes = +noZeroes;
            arrCopy.push(noZeroes);
        }
        return arrCopy;
    }

    Array.prototype.equals = function (array) {
        // if the other array is a falsy value, return
        if (!array)
            return false;

        // compare lengths - can save a lot of time
        if (this.length !== array.length)
            return false;

        for (let i = 0, l = this.length; i < l; i++) {
            // Check if we have nested arrays
            if (this[i] instanceof Array && array[i] instanceof Array) {
                // recurse into the nested arrays
                if (!this[i].equals(array[i]))
                    return false;
            }
            else if (this[i] !== array[i]) {
                // Warning - two different object instances will never be equal: {x:20} != {x:20}
                return false;
            }
        }
        return true;
    };
    for (let i = 0; i < input.length; i++) {

        let currentArr = JSON.parse(input[i]);
        let sorted = currentArr.sort(function (a, b) {
            return a < b
        });
        sorted = removeTrailingZeroes(sorted);

        if (!(obj[sorted] !== undefined)) {
            obj[sorted] = sorted;
            let currentLength = currentArr.length;
            arraysLengthData.push(currentLength);
        }
    }
    arraysLengthData.sort((a, b) => {
        return a > b
    });
    let arrayNumbers=Object.keys(obj);
arrayNumbers.sort((a,b)=>{return a.length-b.length});

    arrayNumbers.forEach(e=>console.log('['+obj[e].join(", ")+']'));

}

//getUniqueSequences(["[7.14, 7.180, 7.339, 80.099]",
//    "[7.339, 80.0990, 7.140000, 7.18]",
//    "[7.339, 7.180, 7.14, 80.099]"]
//);

getUniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]", "[4, -3, 3, -2, 2, -1, 1, 0]"
    , "[4, -3, 3, -2, 2, -1, 1, 0]"
    , "[4, -3, 3, -2, 2, -1, 1, 0]"]
);
