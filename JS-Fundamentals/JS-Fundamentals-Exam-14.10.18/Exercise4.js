function solve(input) {

    let wareHouseMap = new Map();
    let isAddedNow = false;

    for (let i = 0; i < input.length; i++) {

        if (input[i] !== 'INSPECTION' && input[i] !== 'REPORT') {
            let currentArr = input[i].split(", ");
            let command = currentArr[0];

            if (command === 'IN') {
                let coffeeBrand = currentArr[1];
                let nameOfCoffee = currentArr[2];
                let expireDate = currentArr[3];
                let quantity = +currentArr[4];


                if (!wareHouseMap.has(coffeeBrand)) {
                    wareHouseMap.set(coffeeBrand, new Map);
                }

                if (!wareHouseMap.get(coffeeBrand).has(nameOfCoffee)) {
                    wareHouseMap.get(coffeeBrand).set(nameOfCoffee, {expirationDate: expireDate, total: quantity});
                    isAddedNow = true;
                }
                if (((wareHouseMap.get(coffeeBrand).get(nameOfCoffee)['expirationDate']) < expireDate) && (isAddedNow === false)) {
                    wareHouseMap.get(coffeeBrand).set(nameOfCoffee, {expirationDate: expireDate, total: quantity});
                }
                else if (wareHouseMap.get(coffeeBrand).get(nameOfCoffee)['expirationDate'] === expireDate && isAddedNow === false) {
                    console.log(wareHouseMap.get(coffeeBrand).get(nameOfCoffee)['expirationDate']);
                    wareHouseMap.get(coffeeBrand).get(nameOfCoffee)['total'] += quantity;
                }
                isAddedNow = false;
            }
            else if (command === 'OUT') {
                let coffeeBrand = currentArr[1];
                let nameOfCoffee = currentArr[2];
                let expireDate = currentArr[3];
                let quantity = +currentArr[4];

                if (wareHouseMap.has(coffeeBrand)) {
                    if (wareHouseMap.get(coffeeBrand).has(nameOfCoffee)) {
                        if (wareHouseMap.get(coffeeBrand).get(nameOfCoffee)['total'] >= quantity) {
                            if (wareHouseMap.get(coffeeBrand).get(nameOfCoffee)['expirationDate'] > expireDate) {
                                wareHouseMap.get(coffeeBrand).get(nameOfCoffee)['total'] -= quantity;
                            }
                        }
                    }
                }
            }
        }
        else if (input[i] === 'REPORT') {
            console.log(`>>>>> REPORT! <<<<<`);

            let wareHouseArray = [...wareHouseMap.entries()];

            for (let [key, valueMap] of wareHouseArray) {
                console.log(`Brand: ${key}:`);
                for (let [coffee, value] of valueMap) {
                    console.log(`-> ${coffee} -> ${value['expirationDate']} -> ${value['total']}.`);
                }
            }
        }
        else if (input[i] === 'INSPECTION') {

            /// 1.Brands-alphabetically
            /// 2.Coffee by quantity DESC

            let sortedWareHouse = [...wareHouseMap.entries()]
                .sort(sortWareHouses);


            function sortWareHouses(a, b) {
                return a[0] > b[0];
            }

            function sortWaree(a, b) {
                let [brandA, mapA] = a;
                let [brandB, mapB] = b;

                let quantityA = [...mapA.entries()];
                let quantityB = [...mapB.entries()];

                let quantityFinalA = (quantityB[0][1]['total']);
                let quantityFinalB = (quantityB[0][1]['total']);


                return quantityFinalA - quantityB;
            }

            console.log(`>>>>> INSPECTION! <<<<<`);

            for (let [key, valueN] of sortedWareHouse) {
                let currentSort=[...valueN].sort((a,b)=>{
                   console.log(a[0]['total']);

                });
             //  console.log(currentSort);

             //   console.log(`Brand: ${key}:`);
                for (let [coffee, valueX] of valueN) {
                //    console.log(`-> ${coffee} -> ${valueX['expirationDate']} -> ${valueX['total']}.`);
                }
            }
        }
    }
}

solve([
        "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
        "IN, Folgers, Black Silk, 2023-03-01, 14",
        "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
        "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
        "IN, Folgers, Black Silk, 2022-01-01, 10",
        "IN, Lavazza, Intenso, 2022-07-19, 20",
        "OUT, Dallmayr, Espresso, 2022-07-19, 5",
        "OUT, Dallmayr, Crema, 2022-07-19, 5",
        "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
        "REPORT",
        "INSPECTION",
    ]
);