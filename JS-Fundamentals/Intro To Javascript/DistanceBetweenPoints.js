function distanceBetweenPoints(x1,y1,x2,y2){

    let objectA={x:x1,y:y1};
    let objectB={x:x2,y:y2};

let distance1=Math.pow((objectA.x-objectB.x),2);
let distance2=Math.pow((objectA.y-objectB.y),2);

    let c=Math.sqrt(distance1+distance2);
    console.log(c);
}
distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);