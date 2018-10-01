function diagonalAttack(matrix) {

    let leftSum = 0;
    let rightSum = 0;

    let parsedMatrix = matrix.map((row) =>
        row.split(" ").map(Number)
    );
    for (let i = 0; i < parsedMatrix.length; i++) {
        leftSum += parsedMatrix[i][i];
        rightSum += parsedMatrix[i][parsedMatrix.length - i - 1];
    }
 if(leftSum!==rightSum){
     console.log(parsedMatrix.map(element=>element.join(" ")).join(`\n`));
   }
   else{

     for (let i = 0; i <parsedMatrix.length ; i++) {

         for (let j = 0; j <parsedMatrix[i].length ; j++) {

             if(j!==i && j!==parsedMatrix[j].length-1-i){

                parsedMatrix[i][j]=leftSum;
             }
         }
     }
     console.log(parsedMatrix.map(element=>element.join(" ")).join(`\n`));

   }

}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);