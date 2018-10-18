document.querySelector('.button').addEventListener('click',toggle);
function toggle() {
    if (document.querySelector('.button').textContent === 'More') {
        document.querySelector('.button').textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    }
    else if(document.querySelector('.button').textContent === 'Less') {
        document.querySelector('.button').textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }

}