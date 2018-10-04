function secretData(text) {
   text.forEach(l => console.log(l
            .replace(
                /(\*[A-Z][a-zA-Z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g,
                m => '|'.repeat(m.length))));

   /* String.prototype.replaceAt = function replaceAt(index, replacement) {
        if(replacement.length===0){
            replacement.length=1;
            return this.substr(0, index) + replacement + this.substr(index + 1);
        }
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    };

    let textResult = text.join("\n");
    let namePattern = /\*([A-Z][a-z]+)( |\\t|)/g;
    let phonePattern = /\+([\d-]){10}( |\t|)/g;
    let idPattern = /!([A-Za-z\d]+)(\t| |)/g;
    let baseNamePattern = /_([A-Za-z\d]+)(\t| |)/g;
    let fullPattern = /\*([A-Z][a-z]+)( |\\t|)|\+([\d-]){10}( |\t|)|!([A-Za-z\d]+)(\t| |)|_([A-Za-z\d]+)(\t| |)/g;

    // let result = text.match(fullPattern).map((e) => {
    //     return e.replace(e, `${`*`.repeat(e.length)}`);
    // });

    let myArray = [];
    while ((myArray = fullPattern.exec(textResult)) !== null) {
        let currentElement = myArray[0];
        if (currentElement[currentElement.length - 1] !== " ") {

            textResult = textResult.replace(currentElement, `|`.repeat(currentElement.length+" "));
        }
        else {
            textResult = textResult.replace(currentElement, `|`.repeat(currentElement.length - 1)+" ");
        }
    }
    let i = textResult.length;
    let helper = 0;
    let final = '';
   // while (helper <= i) {
//
   //     if (textResult[helper] === ',') {
   //         if (textResult[helper + 1] === textResult[helper + 1].toUpperCase()) {
//
   //             final = textResult.replaceAt(helper, '');
   //             textResult = final;
   //         }
   //     }
//
   //     helper += 1;
   // }

    console.log(textResult); */

}

secretData(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work"', 'with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...']
);