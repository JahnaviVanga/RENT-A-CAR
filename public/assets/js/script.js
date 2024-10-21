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

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        console.log('User Login:', { email, password });
        alert('Login successful!');
    } else {
        alert('Please enter both email and password.');
    }
});

// Function to display the border and car images when scrolling down
window.addEventListener('scroll', function () {
    const gallerySection = document.getElementById('car-gallery');
    const borderSeparator = document.getElementById('border-separator');
    const scrollPosition = window.scrollY;

    // Check if the scroll position is below a certain threshold (e.g., 500px)
    if (scrollPosition > 500) {
        borderSeparator.classList.remove('hidden'); // Show the border
        gallerySection.classList.remove('hidden'); // Show the car gallery
    }
});

// Redirect to dashboard on "View More" button click
document.getElementById('viewMoreBtn').addEventListener('click', function () {
    window.location.href = 'dashboard.html';
});
document.getElementById('Book a Car').addEventListener('click', function() {
    window.location.href = 'register.html';
});
// Function to display the scroll-to-top button when scrolling down
window.addEventListener('scroll', function () {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const scrollPosition = window.scrollY;

    // Show the button if the scroll position is more than 300px
    if (scrollPosition > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});
