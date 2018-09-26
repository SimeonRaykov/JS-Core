function dayOfWeek(dayOfWeek) {

    let day = dayOfWeek;

    function errorMsg() {
        console.log(`error`);
    }

    if (day === `Monday`) {
        day=`1`;
    }

    else if (day === `Tuesday`) {
        day = `2`;
    }
    else if (day === `Wednesday`) {
        day = `3`;
    }
    else if (day === `Thursday`) {
        day = `4`;
    }
    else if (day === `Friday`) {
        day = `5`;
    }
    else if (day === `Saturday`) {
        day = `6`;
    }
    else if (day === `Sunday`) {
        day = `7`;
    }
    else {
        return errorMsg();
    }

    console.log(day);

}

dayOfWeek(1);
dayOfWeek(`Monday`);