function daysInMonth ([day,month, year]) {
        return new Date(year, month-1, 0).getDate();
    }

console.log(daysInMonth([17, 3, 2002]));