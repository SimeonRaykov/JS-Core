function dnaHelix(number) {

    let text = ``;
    let currentNumber = 1;

    let arrayOfElements = [`A`, `T`, `C`, `G`, `T`, `T`, `A`, `G`, `G`, `G`];
    let elementIndex = 0;

    let index = 0;
    let expandingIndex = 0;
    let starsCount = 0;
    let pipeCount = 0;

    while (currentNumber <= number) {

        if (expandingIndex === 0) {
            starsCount = 2;
            pipeCount = 0;
        }
        else if (expandingIndex === 1) {
            starsCount = 1;
            pipeCount = 1;
        }
        else if (expandingIndex === 2) {
            starsCount = 0;
            pipeCount = 2;
        }
        else if (expandingIndex === 3) {
            starsCount = 1;
            pipeCount = 1;
        }

        text += `${`*`.repeat(starsCount)}${arrayOfElements[elementIndex]}${`-`.repeat(pipeCount)}${`-`.repeat(pipeCount)}${arrayOfElements[elementIndex + 1]}${`*`.repeat(starsCount)}\n`;

        expandingIndex += 1;
        if (expandingIndex > 3) {
            expandingIndex = 0;
        }

        elementIndex+=2;

        if (elementIndex >= 9) {
            elementIndex = 0;
        }

        if (expandingIndex > 3) {
            expandingIndex = 0;
        }

      currentNumber+=1;

    }
    return text;

}


console.log(dnaHelix(4));