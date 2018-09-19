function boxesAndBottles(bottles,maxCapacity){

let boxes=Math.ceil(bottles/maxCapacity);
    return boxes;
}
console.log(boxesAndBottles(15,7));