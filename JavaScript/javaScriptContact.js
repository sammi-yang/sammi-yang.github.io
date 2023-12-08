
function validateForm() {
    var emailInput = document.getElementById('email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
      document.getElementById('emailError').innerText = 'Invalid email address. Please enter a valid email.';
      return;
    }

    // Continue with form submission logic if the email is valid
    document.getElementById('emailError').innerText = '';

    // Add your form submission logic here
    alert('Form submitted successfully!');
  }