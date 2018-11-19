class Vacation {

    constructor(organizer, destination, budget) {

        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
        this.counter = 0;
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
        if (!this.kids.hasOwnProperty(grade)) {
            let gradeArr = [];
            gradeArr.push(`${name}-${budget}`);
            this.counter += 1;
            this.kids[`${grade}`] = gradeArr;
            return gradeArr;
        }
        else if (this.kids.hasOwnProperty(grade)) {
            let gradeToCheck = this.kids[`${grade}`];
            if (gradeToCheck !== undefined) {
                if (gradeToCheck.includes(`${name}-${budget}`)) {
                    return `${name} is already in the list for this ${this.destination} vacation.`;
                }
            }
            this.kids[`${grade}`].push(`${name}-${budget}`);
            return gradeToCheck;
        }
        return this;
    }

    removeChild(name, grade) {
        function removeA(arr) {
            var what, a = arguments, L = a.length, ax;
            while (L > 1 && arr.length) {
                what = a[--L];
                while ((ax = arr.indexOf(what)) !== -1) {
                    arr.splice(ax, 1);
                }
            }
            return arr;
        }

        let that = this;
        if (this.kids[grade] !== undefined) {
            this.kids[`${grade}`].forEach(function (element) {
                let currentSplit = element.split("-");
                if (currentSplit[0] === name) {
                    that.counter -= 1;
                    that.kids[grade] = removeA(grade, element);
                    return that.kids[grade];
                }
            });
            return `We couldn't find ${name} in ${grade} grade.`;
        }
      if(typeof this.kids[grade] ==='number'){

      }

        else {
            return `We couldn't find ${name} in ${grade} grade.`;
        }
    }

    toString() {
        if (this.counter === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }
    }

    get numberOfChildren() {
        return this.counter;
    }
}

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
vacation.registerChild('Lilly', 6, 2100);
vacation.registerChild('Pesho', 6, 2400);
console.log(vacation.removeChild('Lilly', 6));






