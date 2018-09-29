function radioCrystals(arrayNum) {

    let desiredCrystal = arrayNum[0];
    let xRayCounter = 0;
    let cuttingCounter = 0;
    let lapCounter = 0;
    let grindCounter = 0;
    let etchCounter = 0;
    let xRayDetected = false;

    for (let i = 1; i < arrayNum.length; i++) {

        let currentCrystal = arrayNum[i];
        console.log(`Processing chunk ${currentCrystal} microns`);
        while (currentCrystal > desiredCrystal) {

            if (cut(currentCrystal) < desiredCrystal) {
                if ((desiredCrystal - (cut(currentCrystal))) === 1) {
                    xRayCounter += 1;
                    cuttingCounter += 1;
                    break;
                }
                else {
                    break;
                }
            }
            currentCrystal = cut(currentCrystal);
            cuttingCounter += 1;
        }
        if (xRayCounter === 1 && cuttingCounter >= 1) {

            console.log(`Cut x${cuttingCounter}`);
            currentCrystal = cut(currentCrystal);
            currentCrystal = transportingAndWashing(currentCrystal);
            currentCrystal = xRay(currentCrystal);
            xRayDetected = true;
        }
        else if (cuttingCounter >= 1) {

            console.log(`Cut x${cuttingCounter}`);
            currentCrystal = transportingAndWashing(currentCrystal);
        }

        while (currentCrystal > desiredCrystal) {

            if (lap(currentCrystal) < desiredCrystal) {
                if ((desiredCrystal - lap(currentCrystal) === 1) && (xRayCounter === 0)) {
                    xRayCounter += 1;
                    lapCounter += 1;
                    break;
                }
                else {
                    break;
                }
            }
            currentCrystal = lap(currentCrystal);
            lapCounter += 1;
        }
        if (xRayCounter === 1 && lapCounter >= 1 && xRayDetected === false) {
            console.log(`Lap x${lapCounter}`);
            currentCrystal = lap(currentCrystal);
            currentCrystal = transportingAndWashing(currentCrystal);
            currentCrystal = xRay(currentCrystal);
            xRayDetected = true;

        }
        else if (lapCounter >= 1) {

            console.log(`Lap x${lapCounter}`);
            currentCrystal = transportingAndWashing(currentCrystal);
        }
        while (currentCrystal > desiredCrystal) {

            if (grind(currentCrystal) < desiredCrystal) {
                if ((desiredCrystal - lap(currentCrystal) === 1) && (xRayCounter === 0)) {
                    xRayCounter += 1;
                    grindCounter += 1;
                    break;
                }
                else {

                    break;
                }

            }
            currentCrystal = grind(currentCrystal);
            grindCounter += 1;
        }
        if (xRayCounter === 1 && grindCounter >= 1 && xRayDetected === false) {
            console.log(`Grind x${grindCounter}`);
            currentCrystal = grind(currentCrystal);
            currentCrystal = transportingAndWashing(currentCrystal);
            currentCrystal = xRay(currentCrystal);
            xRayDetected = true;
        }
        else if (grindCounter >= 1) {

            console.log(`Grind x${grindCounter}`);
            currentCrystal = transportingAndWashing(currentCrystal);
        }
        while (currentCrystal > desiredCrystal) {

            if (etch(currentCrystal) < desiredCrystal) {
                if ((desiredCrystal - etch(currentCrystal) === 1) && (xRayCounter === 0)) {
                    etchCounter += 1;
                    xRayCounter += 1;
                    break;
                }
                else {

                    break;
                }
            }
            currentCrystal = etch(currentCrystal);
            etchCounter += 1;
        }
        if (xRayCounter === 1 && etchCounter >= 1 && xRayDetected === false) {
            console.log(`Etch x${etchCounter}`);
            currentCrystal = etch(currentCrystal);
            currentCrystal = transportingAndWashing(currentCrystal);
            currentCrystal = xRay(currentCrystal);
            xRayDetected = true;
        }
        else if (etchCounter >= 1) {

            console.log(`Etch x${etchCounter}`);
            currentCrystal = transportingAndWashing(currentCrystal);
        }

        if (xRayCounter === 1) {
            console.log(`X-ray x1`);
        }
        console.log(`Finished crystal ${desiredCrystal} microns`);
        xRayCounter = 0;
        cuttingCounter = 0;
        lapCounter = 0;
        grindCounter = 0;
        etchCounter = 0;
        xRayDetected = false;
    }

    function cut(element) {

        return element *= 0.25;
    }

    function lap(element) {

        return element * 0.8;
    }

    function grind(element) {

        return element -= 20;
    }

    function etch(element) {

        return element -= 2;
    }

    function xRay(element) {

        return element += 1;
    }

    function transportingAndWashing(element) {

        console.log(`Transporting and washing`);
        return parseInt(element);
       // return Math.floor(element);
    }
}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);