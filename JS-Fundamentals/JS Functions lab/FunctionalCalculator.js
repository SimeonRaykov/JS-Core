function functionalCalculator(a, b, operator) {

    function division() {
        return a / b;
    }

    function substraction() {
        return a - b;
    }

    function sum() {
        return a + b;
    }

    function multiplication() {
        return a * b;
    }

    if (operator === `+`) {
        return sum();
    }
    else if (operator === `*`) {
        return multiplication();
    }
    else if (operator === `/`) {
        return division();
    }
    else if (operator === `-`) {
        return substraction();
    }
}