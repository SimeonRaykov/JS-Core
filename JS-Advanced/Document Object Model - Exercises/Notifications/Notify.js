function notify(message) {
    let msg = document.getElementById('notification');
    document.getElementById('notification').textContent = 'Something happened!';
    msg.textContent = message;
    msg.style.display = 'block';
    msg.addEventListener('click',function(){
        msg.style.display='none';
    });
    setTimeout(function () {
        msg.style.display = 'none';

    }, 2000);

}