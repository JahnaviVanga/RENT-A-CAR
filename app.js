
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies
app.use(express.json());

// Set the view engine to Pug and specify the views directory
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'view'));

// Route for the home page
app.get('/', (req, res) => {
    res.render('index'); 
});

// Route for the about page
app.get('/about', (req, res) => {
    res.render('about'); 
});

// Route for the contact page
app.get('/contact', (req, res) => {
    res.render('contact'); 
});

// Route for the cars page
app.get('/cars', (req, res) => {
    res.render('cars');
});

// Route for the login page
app.get('/login', (req, res) => {
    res.render('login'); 
});

// Route for the register page
app.get('/register', (req, res) => {
    res.render('register');
});

// Route for the My Bookings page
app.get('/my-bookings', (req, res) => {
    res.render('bookings'); 
});

// 404 error handling for unknown routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
