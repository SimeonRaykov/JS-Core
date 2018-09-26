function printTriangleOfStars(num) {

    let x = 1;

    for (let i = 1; i <= num; i++) {

        console.log(`*`.repeat(i));
        x += 1;
    }
    x-=2;
    while (x >= 0) {

        console.log(`*`.repeat(x));
        x-=1;
    }

}

printTriangleOfStars(2);