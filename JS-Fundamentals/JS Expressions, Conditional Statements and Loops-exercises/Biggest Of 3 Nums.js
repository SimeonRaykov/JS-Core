function biggestOf3Nums([a,b,c]) {

    let firstBigger=Math.max(a,c);
    let biggest=Math.max(firstBigger,b);
    console.log(biggest);

}
biggestOf3Nums([5,-2,7]);