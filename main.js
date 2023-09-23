const form = document.querySelector('.opening-notification-section form');
const email = document.querySelector('.opening-notification-section form input[type=email]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = email.value;
    console.log(email.value);
    if(validateEmail(emailValue)){
        form.classList.remove('error');
    } else {
        form.classList.add('error');
    }
});
function validateEmail (email) {
    //declaring a regular expression, I don't think that it's 
    //important to go over it right now
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //test is a built in javaScript method that's available on
    //regular expressions. It is used to test wether a string
    //matches the regular expxression pattern.
	return re.test(String(email).toLowerCase());
}

//In summary, you can use functions declared using function 
//declarations or named function expressions before their 
//actual declarations, thanks to hoisting.
//However, this behavior does not apply to functions declared 
//using arrow functions or anonymous function expressions