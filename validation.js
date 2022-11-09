var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var inputText = document.getElementById('email-field');
var crossIcon = document.getElementById('cross-icon');
var checkIcon = document.getElementById('check-icon');
const sendButton =  document.getElementById('send-button'); 

function validate(){
    if(inputText.value.match(mailformat)){
        checkIcon.classList.remove('hide');
        crossIcon.classList.add('hide');
        sendButton.removeAttribute('disabled', '')
        sendButton.style.cursor = 'pointer';
    } else{
        crossIcon.classList.remove('hide');
        checkIcon.classList.add('hide');
        sendButton.setAttribute('disabled', '')
        sendButton.style.cursor = 'not-allowed';
    }
}









