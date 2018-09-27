function roadRadar ([speed,area]) {

   // let speed = elements[0];
    //let area = elements[1];
    let blank = ``;

    function getLimit(area) {
        switch (area) {
            case `city`:
                return 50;
            case `residential`:
                return 20;
            case `interstate`:
                return 90;
            case `motorway`:
                return 130;
        }
    }

    let speedingSeverity = ``;

    let speeding = () => {
        return speedingSeverity = `speeding`;
    };

    let excessiveSpeeding = () => {
        return speedingSeverity = `excessive speeding`
    };

    let recklessDriving = () => {
        return speedingSeverity = `reckless driving`
    };

    if (speed <= getLimit(area)) {
        return blank;
    }
    else if (speed - getLimit(area) <= 20) {

        return speeding();
    }
    else if (speed - getLimit(area) <= 40) {

        return excessiveSpeeding();
    } else if (speed - getLimit(area) > 40) {

        return recklessDriving();
    }


}
console.log(roadRadar([40,`city`]));