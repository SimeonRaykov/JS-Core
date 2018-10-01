function printNthElement(array) {

    let arrayCopy = array.slice(0);
    let step = +array[array.length - 1];
    arrayCopy.pop();

    let i = 0;
    console.log(arrayCopy[0]);
    arrayCopy.forEach((element) => {
            if (i === step) {
                console.log(element);
                i = 0;
            }
            i += 1;
        }
    );
}

printNthElement([1, 2, 3, '2']);

//printNthElement(['5','20','31','4','20','2']);