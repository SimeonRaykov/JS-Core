function primeNumberChecker(num) {

    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {

        for (let index = 2; index < num; index++) {

            if (num % index === 0) {
                isPrime = false;
                break;
            }

        }
    }
    console.log(isPrime ? "true" : "false");

}
primeNumberChecker(81);
primeNumberChecker(7);
primeNumberChecker(8);