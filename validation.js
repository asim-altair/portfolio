var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var inputText = document.getElementById('email-field').value;

function validate (){
    if(inputText.match(mailformat)){
        console.log('valid');
    }
}











// function ValidateEmail(inputText)
// {

// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form1.text1.focus();
// return false;
// }
// }
