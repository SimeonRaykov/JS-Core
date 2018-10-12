function sortUsernamesBy2Criteria(input) {

    let namesArr = [];

    for (let i = 0; i < input.length; i++) {

        namesArr.push(input[i]);

    }
   let uniqueNames = namesArr.filter(function(item, pos) {
        return namesArr.indexOf(item) === pos;
    });
    uniqueNames.sort(function(a, b) {
        return a.length - b.length || // sort by length, if equal then
            a.localeCompare(b);    // sort by dictionary order
    });
    uniqueNames.forEach(e=>console.log(e));

}
sortUsernamesBy2Criteria(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);

sortUsernamesBy2Criteria(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']
);