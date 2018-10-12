function autoCompany(input) {

    let map = new Map();

    for (let i = 0; i < input.length; i++) {

        let currentData = input[i].split(" | ");
        let brand = currentData[0];
        let model = currentData[1];
        let carsProduced = +currentData[2];

        if (!(map.has(brand))) {
            map.set(brand, new Map());
        }
        if (!(map.get(brand).has(model))) {
            map.get(brand).set(model, 0);
        }

        map.get(brand).set(model, map.get(brand).get(model)+carsProduced);
    }

    for (let [key, value] of map) {
        console.log(key);
        for (let [model,production] of value) {
            console.log(`###${model} -> ${production}`);
        }
    }

}



autoCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
    'Citroen | C5 | 15']
);