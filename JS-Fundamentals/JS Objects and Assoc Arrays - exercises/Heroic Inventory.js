function heroicInventory(input) {

    let heroData = [];
    let currentHero = {};


    for (let i = 0; i < input.length; i++) {

        let sentence = input[i].split(" / ");
        let name = sentence[0];
        let level = +sentence[1];
        let items=[];
        if (sentence.length >2) {
            items = sentence[2].split(", ");
        }
        currentHero = {
            name: name,
            level: level,
            items: items
        };

            heroData.push(currentHero);
    }

    console.log(JSON.stringify(heroData));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1']
);