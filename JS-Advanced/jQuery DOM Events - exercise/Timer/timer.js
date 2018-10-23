function timer() {

    Number.prototype.pad = function (size) {
        var s = String(this);
        while (s.length < (size || 2)) {
            s = "0" + s;
        }
        return s;
    };

    let timerX = '';
    //Start
    $('#start-timer').on('click', function (event) {
        event.stopPropagation();
        event.preventDefault();

        let seconds = $('#seconds');
        let minutes = $('#minutes');
        let hours = $('#hours');

        //  seconds.text(0);
        // minutes.text(0);
        // hours.text(0);
      timerX = setInterval(function () {

            if (seconds.text() === '59') {
                seconds.text(Number(0).pad(2));

                minutes.text((Number(minutes.text()) + 1).pad(2));
                if (minutes.text() === '59') {
                    minutes.text(Number(0).pad(2));

                    hours.text((Number(hours.text()) + 1).pad(2));
                    if (hours.text() === '24') {
                        hours.text(Number(0).pad(2));
                    }
                }
            }
            else {
                seconds.text((Number(seconds.text()) + 1).pad(2));
            }
        }, 10);
    });

    //Stop
    $('#stop-timer').on('click', function (event) {
        event.stopPropagation();
        event.preventDefault();
        clearInterval(timerX);

    });
}
