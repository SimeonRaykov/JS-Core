function figureOf4Squres(num) {
    let rows = 0;
    if (num % 2 === 0) {
        rows = num -1;
    }
    else {
        rows = num;
    }
    for (let i = 1; i <= rows; i++) {


        if (i === rows || i === 1 || i===(Math.floor(rows / 2)+1)) {

            console.log(`+${draw("-", num - 2)}+${draw("-", num - 2)}+`);

        }
        else {
            console.log(`|${draw(" ", num - 2)}|${draw(" ", num - 2)}|`);
        }
    }

    function draw(symbol, times) {

        let drawn = "";

        for (let i = 1; i <= times; i++) {
            drawn += symbol;
        }
        return drawn;
    }
}

figureOf4Squres(6);
figureOf4Squres(5);
figureOf4Squres(4);