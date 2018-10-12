function cappyJuice(input) {

    let obj = {};
    let namesArr=[];

    obj = {};

    for (let i = 0; i < input.length; i++) {

        let currentData = input[i].split(" => ");
        let currentJuice = currentData[0];
        let currentValue = +currentData[1];

        if (!obj[currentJuice]) {
            obj[currentJuice]=currentValue;
        }
        else {
            obj[currentJuice] += currentValue;
        }
        if(obj[currentJuice]>=1000 && (!namesArr.includes(currentJuice))){
            namesArr.push(currentJuice);
        }
    }

    namesArr.forEach((e)=>{
        console.log(`${e} => ${Math.floor(obj[e]/1000)}`)
    })

}

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);
