function acceptance() {

    let companyValue = $('input[name=shippingCompany]').val();
    let productValue = $('input[name=productName]').val();
    let quantityValue = $('input[name=productQuantity]').val();
    let scrapeValue = $('input[name=productScrape]').val();

    if (companyValue !== '' && productValue !== '') {
        if (quantityValue > 0) {
            if ($.isNumeric(quantityValue) && $.isNumeric(scrapeValue)) {
                    quantityValue -= scrapeValue;
                    let currentDiv = $('<div>');
                    let currentP = $(`<p>[${companyValue}] ${productValue} - ${quantityValue} pieces</p>`);
                    let outOfButton = $('<button>').text('Out Of stock');
                    outOfButton.on("click", ()=>currentDiv.remove());
                    currentP.appendTo(currentDiv);
                    outOfButton.appendTo(currentDiv);
                    currentDiv.appendTo($('#warehouse'));
                    $('input[name=productName]').val("");
                    $('input[name=shippingCompany]').val("");
                    $('input[name=productScrape]').val("");
                    $('input[name=productQuantity]').val("");
            }
        }
    }

}