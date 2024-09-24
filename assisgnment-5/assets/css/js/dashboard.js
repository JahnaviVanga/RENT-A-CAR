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
