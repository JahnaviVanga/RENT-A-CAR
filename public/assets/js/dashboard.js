function bookCar(carName) {
    document.getElementById('modal-text').innerText = `You have selected ${carName}.`;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Example static data display (can be replaced with dynamic data retrieval)
const cars = [
    { name: 'Car Name 1', price: '$50/day' },
    { name: 'Car Name 2', price: '$60/day' },
    { name: 'Car Name 3', price: '$70/day' }
];
// JavaScript function to handle 'More Details' button click
function showDetails(carName) {
    alert(`Details for ${carName}: \nThis car is available for rent at an affordable price. Contact us for more info.`);
}

// JavaScript function to handle 'Book a Car' button click
function bookCar(carName) {
    const userName = prompt(`Booking form for ${carName}:\nPlease enter your name:`);
    if (userName) {
        alert(`Thank you, ${userName}! Your booking for ${carName} has been received. We will contact you shortly.`);
    } else {
        alert("Booking canceled.");
    }
}
