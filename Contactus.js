document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var contactForm = document.querySelector('.form-box');
  
    // Add a submit event listener to the form
    contactForm.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Validate form fields (you can add more validation as needed)
      var firstName = document.getElementById('ijowk-7').value;
      var lastName = document.getElementById('indfi-5').value;
      var email = document.getElementById('ipmgh-7').value;
      var phoneNumber = document.getElementById('imgis-6').value;
      var message = document.getElementById('i5vyy-7').value;
  
      if (!firstName || !lastName || !email || !phoneNumber || !message) {
        alert('Please fill in all fields.');
        return;
      } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      } else {
        alert('Your submission has been successfully submitted!');
      }
  
      // Prepare the form data to send to the server (you can use AJAX to send data to the server)
      var formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message
      };
  
      // Log the form data to the console (you can replace this with AJAX to send data to the server)
      console.log('Form Data:', formData);
  
      // Optionally, reset the form after submission
      contactForm.reset();
    });
  
    // Function to validate email format
    function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
});


// function handleButtonClick() {
//     // Define the outcome or action you want to perform when the button is clicked
//     alert('Your submittion has successfully submitted!'); // Replace this with your desired outcome
// }