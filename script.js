



document.addEventListener('DOMContentLoaded', function () {
    const emailForm = document.getElementById('emailForm');
    const submitMessage = document.getElementById('submitMessage');

    emailForm.addEventListener('submit', (event) => {
        // Check if the form is valid
        if (!emailForm.checkValidity()) {
            event.preventDefault(); // Prevent form submission if the form is not valid
            emailForm.reportValidity(); // This will show the validation messages
            return; // Stop the function if form is not valid
        }

        // Prevent the default form submission behavior
        event.preventDefault();

        // Hide the form
        emailForm.style.display = 'none';

        // Show the submit message
        submitMessage.style.display = 'block';

        // Set timeout to hide submit message and show form again after 3 seconds
        setTimeout(() => {
            submitMessage.style.display = 'none';
            emailForm.style.display = 'block';
        }, 3000);
    });
});
