function convertTofeetAndInches(inches) {

    let inchesConverted = 0;
    let feet = 0;

        feet = Math.floor(inches / 12);
        inchesConverted = inches-(feet*12);

    console.log(`${feet}'-${inchesConverted}"`);
}

convertTofeetAndInches(36);
convertTofeetAndInches(55);
convertTofeetAndInches(11);
convertTofeetAndInches(1);