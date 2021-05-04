const btn = document.querySelector('button');
btn.onclick = function() {
    displayMessage('Woo, this is a new message!!!', 'chat')
}

//Funcion principal que muestra el mensaje
function displayMessage(msgText, msgType) {
    //constantes que traen la informacion del html
    const html = document.querySelector('html');
    //no existe a direfencia de const html, se va a crear
    const panel = document.createElement('div');
    panel.setAttribute('class','msgBox');
    html.appendChild(panel);

    const msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn); 

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }

    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(images/warning.png)';
        panel.style.backgroundColor = 'red';
    } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(images/chat.png)';
        panel.style.backgroundColor = 'aqua';
    } else {
        msg.style.paddingLeft = '20px';
    }
}
//displayMessage();