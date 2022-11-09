var menu2 = document.querySelector('#menu2')
var xmarkbtn = document.querySelector('.btn-xmark')
var barbtn = document.querySelector('.btn-bars')

function clicked(){
    menu2.style.visibility = 'visible';
    barbtn.style.visibility = 'hidden';
}
function unclicked(){
    barbtn.style.visibility = "visible"
    menu2.style.visibility = 'hidden'
}