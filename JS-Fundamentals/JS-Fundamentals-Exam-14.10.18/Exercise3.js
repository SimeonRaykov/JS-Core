function solve(string, information) {

    //  let passengerRegex = / [A-Z]{1}[a-z]*-[A-Z]{1}[a-z]+| [A-Z]{1}[a-z]*-[A-Z]{1}[a-z]*\\.-[A-Z]{1}[a-z]*/g;
    let passengerRegex = / [A-Z]{1}[A-Za-z]*-[A-Z]{1}[A-Za-z]* | [A-Z]{1}[A-Za-z]*-[A-Z]{1}[A-Za-z]*\.[A-Z]{1}[A-Za-z]* /g;
    let airportRegex = / [A-Z]{3}\/[A-Z]{3,} /g;
    let flightNumberRegex = / [A-Z]{1,3}[0-9]{1,5} /g;
    let companyRegex = /- [A-Z]{1}[a-z]*\*[A-Z]{1}[a-z]* /g;
    let secretNumber = '';
    let firstAirport = '';
    let secondAirport = '';
    let name = '';
    let realCompany = '';

    name = string.match(passengerRegex);
    secretNumber = string.match(flightNumberRegex);
    realCompany = string.match(companyRegex);
    firstAirport = string.match(airportRegex).toString().split("/")[0];
    secondAirport = string.match(airportRegex).toString().split("/")[1];

    /// Name Change
    if (name !== null) {
        name = name.toString();
        while (name.includes("-")) {
            name = name.replace("-", " ");
        }
        while (name[0] === ' ' || name[name.length - 1] === ' ') {
            if (name[0] === ' ') {
                name = name.substr(1);
            }
            else if (name[name.length - 1] === ' ') {
                name = name.slice(0, -1)
            }
        }
    }

/// Flight Number Change
    if (secretNumber !== null) {
        secretNumber = secretNumber.toString();
        while (secretNumber[0] === ' ' || secretNumber[secretNumber.length - 1] === ' ') {

            if (secretNumber[0] === ' ') {
                secretNumber = secretNumber.substr(1);
            }
            else if (secretNumber[secretNumber.length - 1] === ' ') {
                secretNumber = secretNumber.slice(0, -1)
            }
        }
    }

    /// Company Change
    if (realCompany !== null) {
        realCompany = realCompany.toString();
        while (realCompany[0] === '*' || realCompany[0] === '-' || realCompany[0] === ' '
        || realCompany[realCompany.length - 1] === '*' || realCompany[realCompany.length - 1] === ' '
        || realCompany[realCompany.length - 1] === '-') {

            if (realCompany[0] === '*' || realCompany[0] === '-' || realCompany[0] === ' ') {
                realCompany = realCompany.substr(1);
            }
            else if (realCompany[realCompany.length - 1] === '*' || realCompany[realCompany.length - 1] === ' '
                || realCompany[realCompany.length - 1] === '-') {
                realCompany = realCompany.slice(0, -1);
            }
        }

        realCompany = realCompany.toString().replace(/\*/g, " ");
        realCompany = realCompany.toString().replace(/-/g, " ");

        //    realCompany=realCompany.replace("- ","");
        //  realCompany=realCompany.replace("*","");

    }

    /// Airport Change
    if (firstAirport !== null && secondAirport !== null) {
        firstAirport = firstAirport.toString();
        secondAirport = secondAirport.toString();

        while (firstAirport[0] === ' ' || firstAirport[firstAirport.length - 1] === ' ') {
            if (firstAirport[0] === ' ') {
                firstAirport = firstAirport.substr(1);
            }
            else if (firstAirport[firstAirport.length - 1] === ' ') {
                firstAirport = firstAirport.slice(0, -1)
            }
        }

        while (secondAirport[0] === ' ' || secondAirport[secondAirport.length - 1] === ' ') {
            if (secondAirport[0] === ' ') {
                secondAirport = secondAirport.substr(1);
            }
            else if (secondAirport[secondAirport.length - 1] === ' ') {
                secondAirport = secondAirport.slice(0, -1)
            }
        }
    }

    if (information === `name`) {
        console.log(`Mr/Ms, ${name}, have a nice flight!`);
    }
    else if (information === `flight`) {
        console.log(`Your flight number ${secretNumber} is from ${firstAirport} to ${secondAirport}.`);
    }
    else if (information === `company`) {
        console.log(`Have a nice flight with ${realCompany}.`)
    }
    else if (information === `all`) {
        console.log(`Mr/Ms, ${name}, your flight number ${secretNumber} is from ${firstAirport} to ${secondAirport}. Have a nice flight with ${realCompany}.`);
    }

}

solve('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all');
solve(' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'flight');
