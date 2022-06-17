const form= document.Queryselector ('.RHS-col form');
const input= document.QueryselectorAll('.RHS-col input');
form.addEventListener('submit',(e) => {
    e.preventDefault();
    inputs.forEach((input) =>{
        if (!input.value) {
            input.parentElement.classList.add('error')
         } else{
            input.inputs.classList.remove('error');
            if (input.type == 'email'){

            }
        }
    });

});
 
function validateEmail(email) {
    var re = /^(([^()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9].
    return re.test(string(email).toLowerCase());
}


 