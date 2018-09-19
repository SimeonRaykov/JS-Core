function oddOrEven(numToCheck){

   if(Math.abs(numToCheck%2)==0){
    console.log("even")
   }
   else if(Math.abs(numToCheck%2)==1){
    console.log("odd")
   }
   else{
       console.log("invalid")
   }
    
}
oddOrEven(3);
oddOrEven(-3);
oddOrEven(5.5);
