document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');


    form.addEventListener('submit', function (event) {
        event.preventDefault();

       const username = document.getElementById('username').value.trim()
        const email =document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        console.log(username, email, password);

        var isValid = true;
        var message = [];

        if (username.length < 3) {
            isValid = false;
            message.push('Username must be at least 3 characters long');
        }
        // if (email === '@' || email === '.'){
         if(!email.include('@') || !email.include('.')){
            isValid = false;
            message
        }
        if(password.length < 8){
            isValid = false;
            message.push('Password must be at least 8 characters long');
        }

        feedbackDiv.style.display = 'block';

        if(isValid === true){
            isValid = true;
            feedbackDiv.style.color = "28a745";
            feedbackDiv.textContent = ' Registration Successful';
        }
        if(isValid === false){
           
            feedbackDiv.innerHTML = message.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }

    });
})