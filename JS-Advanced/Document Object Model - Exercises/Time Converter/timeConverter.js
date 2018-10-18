function attachEventsListeners() {

    document.getElementById('daysBtn').addEventListener('click', calcDays);
    document.getElementById('hoursBtn').addEventListener('click', calcHours);
    document.getElementById('minutesBtn').addEventListener('click', calcMinutes);
    document.getElementById('secondsBtn').addEventListener('click', calcSeconds);

    function calcDays() {
        let days = +(document.getElementById('days').value);
        let hours = 24 * days;
        let minutes = 60 * hours;
        let seconds = 60 * 60 * hours;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('seconds').value = seconds;
        document.getElementById('minutes').value = minutes;

    }

    function calcHours() {
        let hours = +(document.getElementById('hours').value);
        let days = hours / 24;
        let minutes = 60 * hours;
        let seconds = 60 * 60 * hours;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('seconds').value = seconds;
        document.getElementById('minutes').value = minutes;

    }

    function calcMinutes() {
        let minutes = +(document.getElementById('minutes').value);
        let seconds = minutes * 60;
        let hours = minutes / 60;
        let days = minutes / 60 / 24;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('seconds').value = seconds;
        document.getElementById('minutes').value = minutes;
    }

    function calcSeconds() {
        let seconds = +(document.getElementById('seconds').value);
        let minutes = seconds / 60;
        let hours = seconds / 60 / 60;
        let days = seconds / 60 / 60 / 24;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('seconds').value = seconds;
        document.getElementById('minutes').value = minutes;
    }

}