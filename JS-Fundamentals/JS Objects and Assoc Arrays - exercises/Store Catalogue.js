function storeCatalogue(input) {

    let obj = {};

    for (let i = 0; i < input.length; i++) {

        let data = input[i].split(" : ");
        let product = data[0];
        let value = +data[1];

        obj[product] = value;

    }
    let sortable = Object.keys(obj);
    sortable.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    let lastLetter = sortable[0][0];
    console.log(lastLetter);
    sortable.forEach(s => {
        let firstLetter = s[0];
        if (firstLetter !== lastLetter) {
            console.log(firstLetter);
        }
        lastLetter = firstLetter;
        console.log(`  ${s}: ${obj[s]}`)
    })

}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    `DeOdorant : 11`,
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);