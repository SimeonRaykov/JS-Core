function addOrRemoveElements(arr) {

    let initialNum = 1;
    let numbersArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === `add`) {
            numbersArr.push(initialNum);
            initialNum += 1;
        }
        else {
            numbersArr.pop();
            initialNum+=1;
        }
    }

    if (numbersArr.length === 0) {
        console.log(`Empty`)
    }
    else {
        numbersArr.forEach((element) => {
            console.log(element);
        })
    }
}
//console.log(`$$$`);

addOrRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);