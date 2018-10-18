function attachEventsListeners() {

    let element = document.getElementById('convert');

    document.getElementById('convert').addEventListener('click', calc);

    function calc() {


        switch (document.getElementById('inputUnits').value) {
            case'km':
                switch (document.getElementById('outputUnits').value) {
                    case'km':
                        document.getElementById('outputDistance').value = document.getElementById('inputDistance').value;
                        break;
                    case'm':
                        document.getElementById('outputDistance').value =
                            +document.getElementById('inputDistance').value * 1000;
                        break;
                    case'cm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 1000 * 100;
                        break;
                    case'mm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 1000 * 1000;
                        break;
                    case'mi':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.621373;
                        break;
                    case'yrd':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 1.0936133;
                        break;
                    case'ft':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 3280.8399;
                        break;
                    case'in':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 39370.0787;
                        break;
                    default:
                        break;
                }
                break;
            case'm':
                switch (document.getElementById('outputUnits').value) {
                    case'km':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            / 1000;
                        break;
                    case'm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value;
                        break;
                    case'cm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 100;
                        break;
                    case'mm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 1000;
                        break;
                    case'mi':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.000621371192;
                        break;
                    case'yrd':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 1.0936133;
                        break;
                    case'ft':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 3.2808399;
                        break;
                    case'in':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 39.3700787;
                        break;
                    default:
                        break;
                }

                break;
            case'cm':
                switch (document.getElementById('outputUnits').value) {
                    case'km':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            / 100000;
                        break;
                    case'm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            / 100;
                        break;
                    case'cm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value;
                        break;
                    case'mm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 10;
                        break;
                    case'mi':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 6.21371192 / 1000000;
                        break;
                    case'yrd':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.010936133;
                        break;
                    case'ft':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.032808399;
                        break;
                    case'in':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.393700787;
                        break;
                    default:
                        break;
                }
                break;
            case'mm':
                switch (document.getElementById('outputUnits').value) {
                    case'km':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            / 1000000;
                        break;
                    case'm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.001;
                        break;
                    case'cm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.1;
                        break;
                    case'mm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value;
                        break;
                    case'mi':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 6.21371192 / 10000000;
                        break;
                    case'yrd':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.0010936133;
                        break;
                    case'ft':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.0032808399;
                        break;
                    case'in':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.0393700787;
                        break;
                    default:
                        break;
                }
                break;
            case'mi':
                switch (document.getElementById('outputUnits').value) {
                    case'km':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 1.609344;
                        break;
                    case'm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 1609.344;
                        break;
                    case'cm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 160934.4;
                        break;
                    case'mm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 1609344;
                        break;
                    case'mi':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value;
                        break;
                    case'yrd':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 1760;
                        break;
                    case'ft':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 5280;
                        break;
                    case'in':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 63360;
                        break;
                    default:
                        break;
                }
                break;
            case'yrd':
                switch (document.getElementById('outputUnits').value) {
                    case'km':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.0009144;
                        break;
                    case'm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.9144;
                        break;
                    case'cm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 91.44;
                        break;
                    case'mm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 914.4;
                        break;
                    case'mi':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.000568181818;
                        break;
                    case'yrd':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value;
                        break;
                    case'ft':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 3;
                        break;
                    case'in':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 36;
                        break;
                    default:
                        break;
                }
                break;
            case'ft':
                switch (document.getElementById('outputUnits').value) {
                    case'km':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.0003048;
                        break;
                    case'm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.3048;
                        break;
                    case'cm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 30.48;
                        break;
                    case'mm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 304.8;
                        break;
                    case'mi':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.000189393939;
                        break;
                    case'yrd':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.333333333;
                        break;
                    case'ft':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value;
                        break;
                    case'in':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 12;
                        break;
                    default:
                        break;
                }
                break;
            case'in':
                switch (document.getElementById('outputUnits').value) {
                    case'km':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 2.54 / 100000;
                        break;
                    case'm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.0254;
                        break;
                    case'cm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 2.54;
                        break;
                    case'mm':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 25.4;
                        break;
                    case'mi':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 1.57828283 / 100000;
                        break;
                    case'yrd':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.0277777778;
                        break;
                    case'ft':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value
                            * 0.0833333333;
                        break;
                    case'in':
                        document.getElementById('outputDistance').value = +document.getElementById('inputDistance').value;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }

    }


}
