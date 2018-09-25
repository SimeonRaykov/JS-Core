function calendar([day, month, year]) {

    let text = `<table>\n<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>`;

    let currentDate = new Date(`${year}-${month}-${day}`);

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    let daysInCurrentMonth = daysInMonth(month, year);
    let daysInLastMonth = daysInMonth(month - 1, year);


    let firstDayOfCurrentMonth = new Date(`${year}-${month}-1`).getDay();

    let daysInPrevMonth = true;
    if (firstDayOfCurrentMonth === 0) {

        daysInPrevMonth = false;
    }

    let firstDayOfLastMonthX = daysInLastMonth - firstDayOfCurrentMonth + 1;

    text += `<tr>`;
    let currentDay = 1;

    if (daysInPrevMonth === true) {

        let firstDayOfLastMonthCopy = firstDayOfLastMonthX;

        for (let i = 1; i <= firstDayOfCurrentMonth; i++) {

            text += `<td class="prev-month">${firstDayOfLastMonthX}</td>`;
            firstDayOfLastMonthX += 1;
        }

        for (let i = 1; i <= 7 - firstDayOfCurrentMonth; i++) {

            if (i === +day) {
                text += `<td class="today">${i}</td>`;
            }
            else {


                text += `<td>${i}</td>`;
            }
            currentDay += 1;
        }
    }
    else {

        for (let i = 1; i <= 7; i++) {

            if (i === +day) {
                text += `<td class="today">${i}</td>`;
            }
            else {


                text += `<td>${i}</td>`;
            }
            currentDay += 1;
        }


    }
    text += `</tr>`;

    let currentElementsInTheRow = 0;
    let isBreak = false;

    for (let i = 1; i <= 4; i++) {

        text += `<tr>`;

        for (let j = 1; j <= 7; j++) {

            if (currentDay > daysInCurrentMonth) {
                currentDay = daysInCurrentMonth;
                break;
            }

            if (currentDay === +day) {
                text += `<td class="today">${currentDay}</td>`;
            }
            else {


                text += `<td>${currentDay}</td>`;
            }


            currentElementsInTheRow += 1;
            currentDay += 1;
        }
        if (currentElementsInTheRow !== 7 && i === 4) {
            isBreak = true;
            break;
        }
        text += `</tr>`;
        currentElementsInTheRow = 0;

    }

    while (currentDay < daysInCurrentMonth) {

        if (i=== +day) {
            text += `<td class="today">${currentDay}</td>`;
        }
        else {


            text += `<td>${currentDay}</td>`;
        }


        currentDay += 1;
        currentElementsInTheRow += 1;
    }
    let lastRowNumber = 1;
    while (currentElementsInTheRow !== 7) {

        text += `<td class="next-month">${lastRowNumber}</td>`;
        lastRowNumber += 1;

        currentElementsInTheRow += 1;
    }


    text += `</tr>`;
    text += `</table>`;

    return text;
}