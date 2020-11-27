const btnSubmit = document.getElementsByClassName('button')[0];
const inputs = document.getElementsByClassName('inputText');
const formContainer = document.getElementsByClassName('formContainer')[0];
const formLabels = document.getElementsByClassName('textForm');
const errorImgs = document.getElementsByClassName('errorImg');

const addingErrors = (text, index) => {
    errorImgs[index].style.display = 'block';
    errorImgs[index].style.left = inputs[index].getBoundingClientRect().x + inputs[index].getBoundingClientRect().width - 50 + "px";
    errorImgs[index].style.top = inputs[index].getBoundingClientRect().y + inputs[index].getBoundingClientRect().height - 40 + "px";
    
    inputs[index].style.marginBottom = "10px";

    formLabels[index].style.display = 'flex';
    formLabels[index].innerHTML = text;
}

document.getElementsByTagName("BODY")[0].onresize = () => {
    for(let index = 0; index < errorImgs.length; ++index) {
        errorImgs[index].style.left = inputs[index].getBoundingClientRect().x + inputs[index].getBoundingClientRect().width - 50 + "px";
        errorImgs[index].style.top = inputs[index].getBoundingClientRect().y + inputs[index].getBoundingClientRect().height - 40 + "px";
    }
}


btnSubmit.addEventListener('click', () => {

    for(let i = 0; i < errorImgs.length; ++i) {
        window.scrollTo(0,document.querySelector(".attribution").scrollHeight - 20);
        inputs[i].style.border = "2px solid  hsl(246, 25%, 77%)";
        inputs[i].style.marginBottom = "20px";
        
        errorImgs[i].style.display = 'none';
        formLabels[i].style.display = 'none';

        if(i == 2) {
            inputs[i].style.color = 'hsl(249, 10%, 26%)';
        }
    }

    for(let i = 0; i < inputs.length; ++i) {
        if(inputs[i].value === "") {
            inputs[i].style.border = "2px solid hsl(0, 100%, 74%)";
            if(inputs[i].getAttribute('placeholder') === "First Name") {
                addingErrors('First Name cannot be empty', i);

            }

            if(inputs[i].getAttribute('placeholder') === "Last Name") {
                addingErrors('Last Name cannot be empty', i);
            } 
            
            if(inputs[i].getAttribute('placeholder') === "Email Address") {
                addingErrors('Email cannot be empty', i);
            }

            if(inputs[i].getAttribute('placeholder') === "Password") {
                addingErrors('Password cannot be empty', i);
            }

        } else if(inputs[i].getAttribute('placeholder') === "Email Address") {
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(!inputs[i].value.match(mailformat)){
                addingErrors('Looks like this is not an email', i);
                inputs[i].style.border = "2px solid hsl(0, 100%, 74%)";
                inputs[i].style.color = 'hsl(0, 100%, 74%)';
            }
        }
            
    }


});