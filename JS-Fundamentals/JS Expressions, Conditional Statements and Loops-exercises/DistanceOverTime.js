function distanceOverTime([speed1,speed2,time]) {

    let s1=((speed1*1000)/3600)*(time);
    let s2=((speed2*1000)/3600)*time;
    let delta=Math.abs(s1-s2);

    console.log(delta);

}
distanceOverTime([0, 60, 3600]);
distanceOverTime([11, 10, 120]);