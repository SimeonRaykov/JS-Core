function capitalizeTheWords(text) {

    let splitted = text.split(" ");
    let result = splitted.map((e) => e.toLowerCase());
    let finalResult = [];

    for (let i = 0; i < result.length; i++) {

        let currentStr = result[i];
        let firstChar = currentStr[0];
        let newStr = currentStr.replace(firstChar, firstChar.toUpperCase());
        finalResult.push(newStr);

    }

    console.log(finalResult.join(" "));

}

capitalizeTheWords('Capitalize these words');