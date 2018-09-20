function quadraticEquation(a, b, c) {

    let discrimant = (b * b) - (4 * a * c);

    if (discrimant > 0) {

        let x1 = (-b + Math.sqrt(discrimant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discrimant) )/ (2 * a);
        if(x1<x2){
            console.log(`${x1}\n${x2}`)
        }
        else{
            console.log(`${x2}\n${x1}`)
        }


    }
    else if (discrimant === 0) {

        let x = -b / (2 * a);
        console.log(x);

    }
    else {
        console.log("No");
    }
}
quadraticEquation(6,11,-35);
quadraticEquation(1,-12,36);