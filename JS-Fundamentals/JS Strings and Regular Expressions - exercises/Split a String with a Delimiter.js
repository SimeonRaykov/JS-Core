function splitStringWithDelimiter(str,delimiter) {

    let splittedStr=str.split(delimiter);
    splittedStr.forEach((str)=>{
        console.log(str);
    })

}
splitStringWithDelimiter('One-Two-Three-Four-Five', '-');