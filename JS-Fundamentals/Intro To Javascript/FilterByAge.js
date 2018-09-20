function filterByAge(minAge,firstName,firstAge,secondName,secondAge){

let objA={name:firstName,age:firstAge};
let objB={name:secondName,age:secondAge};

if(minAge<=objA.age){
    console.log(objA);
}
if(minAge<=objB.age){
    console.log(objB);
}

}
filterByAge(12, 'Ivan', 15, 'Asen', 9);