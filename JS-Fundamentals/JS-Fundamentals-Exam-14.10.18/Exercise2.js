function solve(input) {

    let atm = [];
    let totalBalance = 0;
    let currentWithdrawGiven = 0;
    for (let i = 0; i < input.length; i++) {

        let currentElement = input[i];
        let sum = currentElement.reduce((a, b) => a + b, 0);
        if (currentElement.length > 2) {
            for (let j = 0; j < currentElement.length; j++) {
                atm.push(currentElement[j]);
            }
            totalBalance += sum;
            console.log(`Service Report: ${sum}$ inserted. Current balance: ${totalBalance}$.`)
        }
        else if (currentElement.length === 2) {
            let currenPersonBalance = currentElement[0];
            let moneyToWithdraw = currentElement[1];

            if (currenPersonBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${currenPersonBalance}$.`);
            }
            else if (moneyToWithdraw > totalBalance) {
                console.log(`ATM machine is out of order!`);
            }
            else {
                atm = atm.sort((a, b) => a < b);

                for (let j = 0; j < atm.length; j++) {

                    let currentBanknote = atm[j];
                    if (currentBanknote <= moneyToWithdraw) {
                        currentWithdrawGiven += currentBanknote;
                        moneyToWithdraw -= currentBanknote;
                        atm.splice(j, 1);
                    }
                }
                totalBalance-=currentWithdrawGiven;
                console.log(`You get ${currentWithdrawGiven}$. Account balance: ${currenPersonBalance - currentWithdrawGiven}$. Thank you!`)
            }

        }
        else if (currentElement.length === 1) {
            let count = 0;

            for (let k = 0; k < atm.length; ++k) {
                if (atm[k] === currentElement[0])
                    count++;
            }

            console.log(`Service Report: Banknotes from ${currentElement[0]}$: ${count}.`);

        }

        currentWithdrawGiven = 0;
    }
}


solve([[20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],
    ]
);