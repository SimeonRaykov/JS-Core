function increment(selector) {

    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    //textArea
    textArea.val(0);
    textArea.addClass(`counter`);
    textArea.attr('disabled', true);

    //buttons
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');
    incrementBtn.attr('id', 'incrementBtn');
    incrementBtn.addClass('btn');
    addBtn.text('Add');

    //List
    list.addClass('results');

    //Events
    $(incrementBtn).on('click', function () {
        event.stopPropagation();
        event.preventDefault();
        let currentValue = +($(textArea).val());
        textArea.val(1 + +currentValue);


        $(addBtn).on('click', function () {
            event.stopPropagation();
            event.preventDefault();
            let textAreaVal = $(textArea).val();
            let currentItem = $(`<li>${textAreaVal}</li>`);
            currentItem.appendTo($(list));
        });
    });


//Append
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);
}


