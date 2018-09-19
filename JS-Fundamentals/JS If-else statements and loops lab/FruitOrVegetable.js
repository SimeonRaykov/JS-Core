function fruitOrVegetable(food) {

    let checked = "";

    switch (food) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "peach":
            checked = "fruit";
            break;
        case "garlic":
        case "parsley":
        case "onion":
        case "cucumber":
        case "tomato":
        case "pepper":
            checked = "vegetable";
            break;
        default:
            checked = "unknown";
            break;

    }
    console.log(checked);

}
fruitOrVegetable("cucumber");