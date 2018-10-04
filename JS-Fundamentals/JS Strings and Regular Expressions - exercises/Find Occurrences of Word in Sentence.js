function wordOccurrencesInSentence(text, word) {

    word = `\\b${word}\\b`;
    let pattern = new RegExp(word, "gi");
    let result = text.match(pattern);
    // try {
    //     console.log(result.length);
    // }
    // catch (Exception) {
    //     console.log(0);
    // }
    if (text.match(pattern)) {
        console.log(result.length);
    }
    else {
        console.log(0);
    }

}

wordOccurrencesInSentence('the the', 'the');