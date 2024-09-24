<script>
    document.addEventListener('DOMContentLoaded', function () {
        const loginForm = document.getElementById('loginForm');
        const accountSection = document.getElementById('accountSection');
        const userNameSpan = document.getElementById('userName');
        const userEmailSpan = document.getElementById('userEmail');
        const logoutButton = document.getElementById('logoutButton');

        // Handle login form submission
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Check if the email and password match the correct credentials
            if (email === 'nikithaalapati2@gmail.com' && password === '123') {
                // Hide the login form
                loginForm.style.display = 'none';

                // Show the account section
                accountSection.style.display = 'block';
                
                // Display the user's email and name
                userNameSpan.textContent = 'Nikitha Alapati';
                userEmailSpan.textContent = email;
            } else {
                // If credentials are wrong, alert the user
                alert('Invalid email or password. Please try again.');
            }
        });

        // Handle logout button click
        logoutButton.addEventListener('click', function () {
            // Redirect to the main page
            window.location.href = 'index.html';
        });
    });
</script>
