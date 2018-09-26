function wordsUppercase(str) {
    let convertedString=str.toUpperCase();
    function extractwords(){
        return convertedString.split(/\W+/)
    }
    let words=extractwords();
    words=words.filter(w=>w!=='');
    console.log(words.join(", "));

}

wordsUppercase(`h,ey, ,gf`);
wordsUppercase(`Hi, how are you?`);
wordsUppercase(`Functions in JS can be nested, i.e. hold other functions`);