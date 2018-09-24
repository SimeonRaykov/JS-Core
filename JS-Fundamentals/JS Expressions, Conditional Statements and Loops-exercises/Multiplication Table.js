function multiplicationTable(num) {

    let text = `<table border="1">`;
    text += `<tr><th>x</th>`;

    for (let index = 1; index <= num; index++) {

        text += `<th>${index}</th>`;

    }
    text += `</tr>`;

    for (let i = 1; i <= num; i++) {

        text += `<tr><th>${i}</th>`;

        for (let j = 1; j <= num; j++) {

            text+=`<td>${i*j}</td>`;

        }
        text += `</tr>`;

    }

    text += `</table>`;
    console.log(text);
}
multiplicationTable(2);