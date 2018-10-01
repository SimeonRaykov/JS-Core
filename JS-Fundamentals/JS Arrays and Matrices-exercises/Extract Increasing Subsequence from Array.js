function extractIncreasingSub(array) {

    let currentBest = array[0];
    let result = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] >= currentBest) {
            result.push(array[i]);
            currentBest = array[i];
        }
    }

    result.forEach((element)=>{
        console.log(element);
    })
}
extractIncreasingSub([10,2,3,10,2]);