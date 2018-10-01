function magicMatrices(matrix) {

    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[0][i];
    }
    let sum2 = 0;

    for (let x = 0; x < matrix.length; x++) {

        for (let i = 0; i < matrix.length; i++) {

            sum2 += matrix[x][i];
        }
        let lastSum = sum2;
        if (lastSum !== sum) {
            console.log(false);
            return;
        }
        sum2 = 0;
    }
    for (let x = 0; x < matrix.length; x++) {

        for (let i = 0; i < matrix.length; i++) {

            sum2 += matrix[i][x];
        }
        if (sum2 !== sum) {
            console.log(`false`);
            return;
        }
        sum2 = 0;
    }
    console.log(`true`);
}

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);