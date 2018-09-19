function coneVolumeAndSurface(radius,height){

    let slant=Math.sqrt((radius*radius)+(height*height));
let volume=(1/3)*Math.PI*radius*radius*height;
let surface=(Math.PI*radius*slant)+(Math.PI*radius*radius);

console.log(volume);
console.log(surface);
}
coneVolumeAndSurface(3,5)