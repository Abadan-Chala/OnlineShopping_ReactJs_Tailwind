import React from 'react';

const laptops = [
    {
        id: 1,
        brand: 'Apple',
        model: 'MacBook Pro',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        brand: 'Dell',
        model: 'XPS 13',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        brand: 'HP',
        model: 'Spectre x360',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        brand: 'Lenovo',
        model: 'ThinkPad X1 Carbon',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 5,
        brand: 'Asus',
        model: 'ZenBook 14',
        image: 'https://via.placeholder.com/150',
    },
];

const Laptops = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Laptops</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {laptops.map((laptop) => (
                    <div key={laptop.id} className="border rounded-lg p-4 shadow-lg">
                        <img src={laptop.image} alt={`${laptop.brand} ${laptop.model}`} className="w-full h-48 object-cover mb-4" />
                        <h2 className="text-xl font-semibold">{laptop.brand}</h2>
                        <p className="text-gray-700">{laptop.model}</p>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                            Order
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Laptops;