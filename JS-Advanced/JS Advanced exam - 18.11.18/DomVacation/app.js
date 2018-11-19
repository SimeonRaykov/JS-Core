function realEstateAgency() {

    let apartmentRentValue = $('input[name=apartmentRent]').val();
    let apartmentTypeValue = $('input[name=apartmentType]').val();
    let agencyCommissionValue = $('input[name=agencyCommission]').val();
    let sum = 0;
    let msg = $('<p>');

    $('button[name=regOffer]').on("click", () => {
        $('#notifications').append(msg);
        let errorMsg = 'Your offer registration went wrong, try again.'

        if ($('input[name=apartmentType]').val() !== '') {
            if ($.isNumeric($('input[name=apartmentRent]').val()) && $.isNumeric($('input[name=agencyCommission]').val())) {
                if (agencyCommissionValue >= 0) {

                    let apartment = $('<div class="apartment">');
                    let rent = $('<p>').text(`Rent: ${$('input[name=apartmentRent]').val()}`);
                    let type = $('<p>').text(`Type: ${$('input[name=apartmentType]').val()}`);
                    let comission = $('<p>').text(`Commission: ${$('input[name=agencyCommission]').val()}`);

                    rent.appendTo(apartment);
                    type.appendTo(apartment);
                    comission.appendTo(apartment);
                    $("#building").append(apartment);

                    msg.text("Your message was created successfully.");
                }

            }
            else {
                $('#notifications').append(msg);
            }

        }
        else {
            $("#notifications").empty();
            $('#notifications').append(errorMsg);
        }
        $('input[name=apartmentRent]').val('');
        $('input[name=apartmentType]').val('');
        $('input[name=agencyCommission]').val('');
    });

    $('button[name=findOffer]').on("click", () => {

        if ($.isNumeric($('input[name=familyBudget]').val())) {
            if ($('input[name=familyBudget]').val() > 0) {
                if ($('input[name=familyApartmentType]').val() !== '' && $('input[name=familyName]').val() !== '') {

                    let isFound = false;
                    let newHome = 'Enjoy your new home! :))';
                    let errorMsg = 'We were unable to find you a home, so sorry :(';

                    $('.apartment').each(function (i, obj) {
                        let leftRent = obj.childNodes[0].innerText.slice(6);
                        let leftCommission = obj.childNodes[2].innerText.slice(12);
                        if (obj.childNodes[1].innerText.slice(6) === $('input[name=familyApartmentType]').val()) {

                            if ((Number(leftRent) + Number((leftCommission / 100) * leftRent)) <= Number($('input[name=familyBudget]').val())) {
                                sum += ($('input[name=familyBudget]').val() * (leftCommission / 100));

                                obj.childNodes[0].innerText = `${$('input[name=familyName]').val()}`;
                                obj.childNodes[1].innerText = `live here now`;
                                obj.childNodes[2].remove();
                                let moveButton = $(`<button>MoveOut</button>`).on("click", () => {


                                    let cockRoachesMsg = `They had found cockroaches in ${obj.childNodes[0].innerText}'s apartment`;
                                    $(this).remove();
                                    msg.text(cockRoachesMsg);

                                });
                                moveButton.appendTo(obj);

                                isFound = true;
                                $("h1").text(`Agency profit: ${sum} lv.`);
                            }
                        }
                    });
                    if (isFound) {
                        msg.text(newHome);
                    }
                    else {
                        msg.text(errorMsg)
                    }
                }
            }
        }
        $('input[name=apartmentRent]').val('');
        $('input[name=apartmentType]').val('');
        $('input[name=agencyCommission]').val('');
    })
}