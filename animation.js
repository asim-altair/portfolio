var i = 0;
var text = 'I am always learning and growing, and I hope to continue to develop my skills for years to come.'

function typeWriter(){
    if(i<text.length){
        document.getElementById('typed-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,50);
    }
    } 

typeWriter();