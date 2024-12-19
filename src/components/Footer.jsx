import React from 'react';

function Footer() {
    return (
        <div className="bg-gray-800 text-white text-center p-4">
            &copy; {new Date().getFullYear()} MyShop. All rights reserved.
        </div>
    );
}

export default Footer;