function validityChecker(pointsArr) {

    let x1 = pointsArr[0];
    let y1 = pointsArr[1];
    let x2 = pointsArr[2];
    let y2 = pointsArr[3];

    let x3=0;
    let y3=0;

    let point1 = {x: x1, y: y1};
    let point2 = {x: x2, y: y2};
    let point3 = {x: x3, y: y3};

    function isValid(x1, y1, x2, y2) {
        let a = x1 - x2;
        let b = y1 - y2;

        let c = Math.sqrt(a * a + b * b);

        if (Number.isInteger(c)) {
            return `valid`;
        }
        return `invalid`;
    }

    console.log(`{${point1.x}, ${point1.y}} to {${point3.x}, ${point3.y}} is ${isValid(point1.x, point1.y,
        point3.x, point3.y)}`);

    console.log(`{${point2.x}, ${point2.y}} to {${point3.x}, ${point3.y}} is ${isValid(point2.x, point2.y,
        point3.x, point3.y)}`);

    console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is ${isValid(point1.x, point1.y,
        point2.x, point2.y)}`);

}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);