function rotateArray(arr) {

    let arrCopy = [].concat(arr);
    let rotations = +arrCopy.pop();
    let currentElement = "";

    for (let i = 0; i < rotations%arrCopy.length; i++) {

        currentElement = arrCopy.pop();
        arrCopy.unshift(currentElement);
    }

    console.log(arrCopy.join(" "));
}

//rotateArray([1,2,3,3]);
rotateArray(['Banana','Orange', 'Coconut', 'Apple','15']
);