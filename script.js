// Get all the form elements
const name = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (e) => {
  // Prevent the form from submitting in the default way
  e.preventDefault();

  // Check if any of the fields are empty
  if (!name.value ||!username.value ||!email.value ||!password.value) {
    // If any are empty, display an alert
    alert('Please fill in all the fields.');
  } else {
    // If all are filled, submit the form
    form.submit();
  }
});

// document.querySelector(".form").onsubmit = function(event) {
//     event.preventDefault(); // Prevent form submission for demonstration
//     var isValid = true;
//     var name = document.getElementById('name').value.trim();
//     var username = document.getElementById('username').value.trim();
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var terms = document.getElementById('terms').checked;

//     // Validate Name
//     if(name === "") {
//         alert("Name cannot be empty");
//         isValid = false;
//     }

//     // Validate Username
//     if(username === "") {
//         alert("Username cannot be empty");
//         isValid = false;
//     }

//     // Validate Email
//     if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//         alert("You have entered an invalid email address!");
//         isValid = false;
//     }

//     // Validate Password
//     if(password.length < 6) {
//         alert("Password must be at least 6 characters long");
//         isValid = false;
//     }

//     // Check if Terms and Conditions are accepted
//     if(!terms) {
//         alert("You must accept the terms and conditions");
//         isValid = false;
//     }

//     if(isValid) {
//         // Form is valid, you can proceed with form submission or further logic here
//         console.log("Form is valid. Submitting form...");
//         // For demonstration, we're not actually submitting the form
//         event.target.submit(); // Uncomment this to submit the form when valid
//     }
// };
