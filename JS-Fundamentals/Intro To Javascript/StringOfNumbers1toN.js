function strOfNumbers1toN(number){
number+="";

let concaten="";

    for (let index = 1; index <=number; index++) {
    
        concaten+=index;
        
    }
    return concaten;

}
console.log(strOfNumbers1toN(12));