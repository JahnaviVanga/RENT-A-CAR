document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        console.log('User Registered:', { name, email, password });
        alert('Registration successful!');
    } else {
        alert('Please fill out all fields.');
    }
});
