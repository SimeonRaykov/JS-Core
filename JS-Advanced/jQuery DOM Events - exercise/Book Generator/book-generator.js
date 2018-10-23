function createBook(selector, title, author, numberISBN) {

    let fragment = document.createDocumentFragment();
    let bookDiv = $(`<div>`);
    bookDiv.attr('id', 'book1');
    let pTitle = $(`<p>${title}</p>`);
    pTitle.addClass('title');
    let pAuthor = $(`<p>${author}</p>`);
    pAuthor.addClass('author');
    let pISBN = $(`<p>${numberISBN}</p>`);
    pISBN.addClass('isbn');

    const selectBtn = $('<button>Select</button>');
    const deselectBtn = $('<button>Deselect</button>');

    pTitle.appendTo(fragment);
    pAuthor.appendTo(fragment);
    pISBN.appendTo(fragment);
    selectBtn.appendTo(fragment);
    deselectBtn.appendTo(fragment);
    bookDiv.append(fragment);
    bookDiv.appendTo(selector);
    bookDiv.css('border', '2px solid blue');

    function selectButton() {
        $(selectBtn).on('click', function () {
            event.stopPropagation();
            event.preventDefault();
            bookDiv.css('border', '2px solid blue');

        })
    }

    selectButton();

    function deselectButton() {
        $(deselectBtn).on('click', function () {
                event.stopPropagation();
                event.preventDefault();
                bookDiv.css('border', '');
            }
        )
    }

    deselectButton();
}