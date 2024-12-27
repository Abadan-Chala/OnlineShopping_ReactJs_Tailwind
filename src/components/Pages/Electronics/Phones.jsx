import React from 'react';

const phones = [
    { id: 1, name: 'iPhone 13', brand: 'Apple', price: '$799' },
    { id: 2, name: 'Galaxy S21', brand: 'Samsung', price: '$699' },
    { id: 3, name: 'Pixel 6', brand: 'Google', price: '$599' },
];

const Phones = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Smartphones</h1>
            <ul className="space-y-4">
                {phones.map(phone => (
                    <li key={phone.id} className="p-4 border rounded shadow">
                        <h2 className="text-xl font-semibold">{phone.name}</h2>
                        <p>Brand: {phone.brand}</p>
                        <p>Price: {phone.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Phones;