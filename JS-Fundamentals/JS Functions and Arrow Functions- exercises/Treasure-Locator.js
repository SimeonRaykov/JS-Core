function treasureLocator(numberArr) {

    let location = ``;

    function tuvalu() {
       return `Tuvalu`;
    }

    function tonga() {
        return `Tonga`;
    }

    function cook() {
        return `Cook`;
    }

    function samoa() {
       return`Samoa`;
    }

    function onTheBot() {
        return `On the Bottom Of The Ocean`;

    }
    function tokelau() {
        return `Tokelau`;
    }

    for (let i = 0; i < numberArr.length; i += 2) {

        let currentX = numberArr[i];
        let currentY = numberArr[i + 1];

        if (currentX >= 1 && currentX <= 3
            && currentY >= 1 && currentY <= 3) {

            console.log(tuvalu());
        }
        else if (currentX >= 8 && currentY <= 9
            && currentY >= 0 && currentY <= 1) {

            console.log(tokelau());
        }
        else if (currentX >= 0 && currentX <= 2
            && currentY >= 6 && currentY <= 8) {

            console.log(tonga());
        }
        else if (currentX >= 5 && currentX <= 7
            && currentY >= 3 && currentY <= 6) {

            console.log(samoa());
        }
        else if (currentX >= 4 && currentX <= 9
            && currentY >= 7 && currentY <= 8) {

            console.log(cook());
        }
        else {

            console.log(onTheBot());
            //location = `On the bottom of the ocean`;

        }
        // console.log(location);
    }
}

//treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([6,4]);