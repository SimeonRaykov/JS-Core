function figureArea(w,h,W,H){

    let s1=w*h;
    let s2=W*H;
    let s3=Math.min(w,W)*Math.min(H,h);

return Math.abs(s3-(s2+s1));

}
console.log(figureArea(2,4,5,3));
console.log(figureArea(13, 2, 5, 8));