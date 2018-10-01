function sortArray(array) {

    let arrayCopy = [].concat(array);

    arrayCopy.forEach((element) => {
        return element.toLowerCase();
    });

    arrayCopy.sort(function (a, b) {
        return a.length - b.length || a > b;
    });

    arrayCopy.forEach((element) => {
            console.log(element);
        }
    )
}

sortArray(['alpha',
    'beta',
    'gamma']
);

sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);

sortArray(['test',
    'Deny',
    'omen',
    'Default']
);