function cookingByNumbers(commands) {

    let startingNumber = commands[0];
    startingNumber = +startingNumber;

    function chop(num) {
        return num /= 2;
    }

    function dice(num) {
        return Math.sqrt(num);
    }

    function spice(num) {
        return num += 1;
    }

    function bake(num) {
        return num *= 3;
    }

    function fillet(number) {
        return number * 0.8;
    }

    commands.splice(0, 1);

    while (commands.length > 0) {

        if (commands[0] === `chop`) {
            console.log(startingNumber = chop(startingNumber));
        }
        else if (commands[0] === `bake`) {
            console.log(startingNumber = bake(startingNumber));
        }
        else if (commands[0] === `dice`) {
            console.log(startingNumber = dice(startingNumber));
        }
        else if (commands[0] === `spice`) {
            console.log(startingNumber = spice(startingNumber));
        }
        else if (commands[0] === `fillet`) {
            console.log(startingNumber = fillet(startingNumber));
        }
        commands.splice(0, 1);
    }
 //  return startingNumber;
}

(cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']));
console.log(cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']));
