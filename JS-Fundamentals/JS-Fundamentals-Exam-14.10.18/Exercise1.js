function solve(input) {

    let coffeeCaffeineCost = 0.8;
    let coffeeDecafCost = 0.9;
    let teaCost = 0.8;
    let incomeReport = 0;

    for (let i = 0; i < input.length; i++) {

        let currentArr = input[i].split(", ");
        let currentDrinkCost = 0;
        let currentChange = 0;

        let money = +currentArr[0];
        let typeOfDrink = currentArr[1];
        if (typeOfDrink === 'coffee') {
            let coffeeType = currentArr[2];
            if (coffeeType === `decaf`) {
                currentDrinkCost = coffeeDecafCost;
            }
            else if (coffeeType === `caffeine`) {
                currentDrinkCost = coffeeCaffeineCost;
            }

            if (currentArr[3] === `milk`) {

                let milk = 0.1 * currentDrinkCost;
                milk = Number(Math.round(milk * 10) / 10);
                currentDrinkCost+=milk;
                let quantityOfSugar = +currentArr[4];
                if(quantityOfSugar!==0){
                    currentDrinkCost+=0.1;
                }
            }
            else {
                let quantityOfSugar = +currentArr[3];
                if(quantityOfSugar!==0){

                    currentDrinkCost+=0.10;
                }
            }

        }

        else if (typeOfDrink === `tea`) {
            currentDrinkCost = teaCost;

            if (currentArr[2] === 'milk') {
                let milk = 0.1 * currentDrinkCost;
                milk = Math.round(milk * 10) / 10;
                currentDrinkCost+=milk;

                let quantityOfSugar=+currentArr[3];
                if(quantityOfSugar!==0){
                    currentDrinkCost+=0.1;
                }

            }
            else {
                let quantityOfSugar = +currentArr[2];
                if(quantityOfSugar!==0){
                    currentDrinkCost+=0.1;
                }
            }
        }
        if (currentDrinkCost <= money) {
            console.log(`You ordered ${typeOfDrink}. Price: ${currentDrinkCost.toFixed(2)}$ Change: ${(money-currentDrinkCost).toFixed(2)}$`);
            incomeReport+=currentDrinkCost;
        }
        else {
            console.log(`Not enough money for ${typeOfDrink}. Need ${(currentDrinkCost - money).toFixed(2)}$ more.`)
        }
    }
    console.log(`Income Report: ${incomeReport.toFixed(2)}$`);

}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, 2',
    '1.00, coffee, decaf, 0']);

//solve(['8.00, coffee, decaf, 4',
//    '1.00, tea, 2']
//);