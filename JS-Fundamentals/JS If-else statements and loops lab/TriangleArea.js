function triangleArea(a,b,c){

    let perimeter=a+b+c;
    let semiPerimeter=perimeter/2;
let triangleArea=Math.sqrt(semiPerimeter*(semiPerimeter-a)*(semiPerimeter-b)*(semiPerimeter-c));
console.log(triangleArea);

}
triangleArea(2,3.5,4);