import React, { useState } from 'react';

const tabletsData = [
    { id: 1, name: 'Tablet A', brand: 'Brand X', price: 299 },
    { id: 2, name: 'Tablet B', brand: 'Brand Y', price: 399 },
    { id: 3, name: 'Tablet C', brand: 'Brand X', price: 499 },
    { id: 4, name: 'Tablet D', brand: 'Brand Z', price: 599 },
];

const Tablets = () => {
    const [filter, setFilter] = useState('');
    const [tablets, setTablets] = useState(tabletsData);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        const filteredTablets = tabletsData.filter(tablet =>
            tablet.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            tablet.brand.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setTablets(filteredTablets);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tablets</h1>
            <input
                type="text"
                placeholder="Filter by name or brand"
                value={filter}
                onChange={handleFilterChange}
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tablets.map(tablet => (
                    <div key={tablet.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{tablet.name}</h2>
                        <p className="text-gray-600">{tablet.brand}</p>
                        <p className="text-gray-800">${tablet.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tablets;