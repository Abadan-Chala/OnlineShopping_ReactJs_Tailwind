import React from 'react';

const watches = [
    {
        brand: 'Apple',
        model: 'Apple Watch Series 6',
        image: 'https://example.com/apple-watch.jpg',
        price: '$399',
    },
    {
        brand: 'Samsung',
        model: 'Galaxy Watch 3',
        image: 'https://example.com/galaxy-watch.jpg',
        price: '$349',
    },
    {
        brand: 'Garmin',
        model: 'Garmin Forerunner 945',
        image: 'https://example.com/garmin-forerunner.jpg',
        price: '$499',
    },
    {
        brand: 'Fitbit',
        model: 'Fitbit Versa 3',
        image: 'https://example.com/fitbit-versa.jpg',
        price: '$229',
    },
    {
        brand: 'Fossil',
        model: 'Fossil Gen 5',
        image: 'https://example.com/fossil-gen5.jpg',
        price: '$295',
    },
];

const Watches = () => {
    return (
        <div className="p-4 container">
            <h1 className="text-2xl font-bold mb-4">Smart Watches</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {watches.map((watch, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-lg">
                        <img src={watch.image} alt={watch.model} className="w-full h-48 object-cover mb-4" />
                        <h2 className="text-xl font-semibold">{watch.brand}</h2>
                        <p className="text-gray-600">{watch.model}</p>
                        <p className="text-lg font-bold">{watch.price}</p>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Order</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Watches;