function printArrayWithGivenDelimiter(arrayAndDelimiter) {

    let delimiter=arrayAndDelimiter[arrayAndDelimiter.length-1];
    let array=arrayAndDelimiter.slice(0);
    array.pop();
    console.log(array.join(delimiter));
}
printArrayWithGivenDelimiter([1,2,3,'$$$']);