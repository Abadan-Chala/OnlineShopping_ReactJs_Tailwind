import React from 'react';

function Products() {
    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold">Products</h2>
            {/* Add product items here */}
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="border p-4">Product 1</div>
                <div className="border p-4">Product 2</div>
                <div className="border p-4">Product 3</div>
            </div>
        </div>
    );
}

export default Products;