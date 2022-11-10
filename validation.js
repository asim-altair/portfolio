var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var inputText = document.getElementById('email-field');
var crossIcon = document.getElementById('cross-icon');
const sendButton =  document.getElementById('send-button'); 

function validate(){
    if(inputText.value.match(mailformat)){
        sendButton.removeAttribute('disabled', ''); 
        sendButton.style.cursor = 'pointer';
        crossIcon.classList.add('hide');
    } else{
        crossIcon.classList.remove('hide');
        sendButton.setAttribute('disabled', '');
        sendButton.style.cursor = 'not-allowed';
    }
}


function submited(){
    alert("Message sent successfully");
}