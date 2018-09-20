function nextDay(year,month,day){

let oldDate=new Date(year,month-1,day);

let newDate=oldDate;
newDate.setDate(oldDate.getDate()+1);

console.log((newDate.getFullYear())+"-"+(newDate.getMonth()+1)+"-"+(newDate.getDate()));    

}
nextDay("2016","5","23");