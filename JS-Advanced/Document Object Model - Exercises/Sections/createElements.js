function create(sentences) {
    for (let sentence of sentences) {
        let currentDiv = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.style.display = 'none';
        paragraph.textContent = sentence;
        currentDiv.appendChild(paragraph);
        currentDiv.addEventListener('click', function () {
            if (paragraph.style.display === 'none') {

                paragraph.style.display = 'block';
            }
            else if (paragraph.style.display === 'block') {
                paragraph.style.display = 'none';
            }
        });

        document.getElementById('content').appendChild(currentDiv);
    }
}