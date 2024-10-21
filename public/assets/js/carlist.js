import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('/api/cars')
            .then(res => setCars(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Available Cars</h1>
            {cars.map(car => (
                <div key={car._id}>
                    <h2>{car.name}</h2>
                    <p>Price: ${car.pricePerDay}/day</p>
                    <p>{car.description}</p>
                    <button>Book Now</button>
                </div>
            ))}
        </div>
    );
};

export default CarList;
