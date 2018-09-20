function rounding([number,rounded]) {

    if(rounded>15){
        rounded=15;
    }
    let fixed=Number(number).toFixed(rounded);

  // fixed= Number(fixed);
   // while((fixed[fixed.length-1])=="0"){
  //      fixed= fixed.substring(0, fixed.length - 1);
  //  }
    console.log(+fixed);
}
rounding([10.5,3]);