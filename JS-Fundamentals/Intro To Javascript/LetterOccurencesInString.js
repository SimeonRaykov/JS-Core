function letterOccurenceInStr(string,letter) {

    string+="";
    letter+="";

    let count = 0;
    for (let index = 0; index <= string.length; index++) {
        if (string[index] === letter) {
            count += 1;
        }

    }
    console.log(count);

}

function countLettersInString(string, letter) {
    let count=0;
    for (let i = 0; i <string.length ; i++) {
        if(letter===string[i]){
            count++;
        }
    }
    return count
}
console.log(countLettersInString("hello","l"));

//letterOccurenceInStr(hello,l);
//letterOccurenceInStr("lll", "l");