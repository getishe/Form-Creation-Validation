// document.addEventListener('DOMContentLoaded', function (){
//     const form = document.getElementById('registration-form');
//     const feedbackDiv = document.getElementById('form-feedback');


//     form.addEventListener('submit', function (event) {
//         event.preventDefault();

//        const username = document.getElementById('username').value.trim()
//         const email =document.getElementById('email').value.trim();
//         const password = document.getElementById('password').value.trim();

//         console.log(username, email, password);

//         var isValid = true;
//         var message = [];

//         if (username.length < 3) {
//             isValid = false;
//             message.push('Username must be at least 3 characters long');
//         }
//         // if (email === '@' || email === '.'){
//          if(!email.include('@') || !email.include('.')){
//             isValid = false;
//             message
//         }
//         if(password.length < 8){
//             isValid = false;
//             message.push('Password must be at least 8 characters long');
//         }

//         feedbackDiv.style.display = 'block';

//         if(isValid === true){
//             isValid = true;
//             feedbackDiv.style.color = "28a745";
//             feedbackDiv.textContent = ' Registration Successful';
//         }
//         if(isValid === false){
           
//             feedbackDiv.innerHTML = messages.join('<br>');
//             feedbackDiv.style.color = "#dc3545";
//         }

//     });
// })

document.addEventListener('DOMContentLoaded', function() {
    // Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Retrieve input values and trim them
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        const messages = []; // Array to store validation error messages
        let isValid = true; // Variable to track overall validation status

        // Validation logic
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback
        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.textContent = 'Registration successful!';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});
