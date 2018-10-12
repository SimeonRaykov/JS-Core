function JSONtable(input) {

    let text = `<table>\n`;
    let names = [];
    let positions = [];
    let salaries = [];

    for (let i = 0; i < input.length; i++) {

        let info = JSON.parse(input[i]);
        let currName = info['name'];
        let currPos = info['position'];
        let currSalary = info['salary'];
        names.push(currName);
        positions.push(currPos);
        salaries.push(currSalary);
    }

    let lengthX = names.length;
    for (let i = 0; i < lengthX; i++) {
        text += `    <tr>\n`;
        text += `        <td>${names[0]}</td>\n`;
        text += `        <td>${positions[0]}</td>\n`;
        text += `        <td>${salaries[0]}</td>\n`;

        salaries.shift();
        names.shift();
        positions.shift();
        text += `    <tr>\n`;
    }
    text += `</table>`;
    console.log(text);
}

JSONtable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);