import React, { useState } from 'react';
import prod1 from '../../assets/prod1.png';
import prod2 from '../../assets/prod2.jpg';
import prod3 from '../../assets/prod3.jpg';
import prod4 from '../../assets/prod4.png';
import prod5 from '../../assets/prod5.jpg';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
    {
        id: 1,
        img: prod1,
        title: "Cold wear",
        rating: 5.0,
        author: "myshop",
        aosDelay: "0",
    },
    {
        id: 2,
        img: prod2,
        title: "Women wear",
        rating: 5.0,
        author: "myshop",
        aosDelay: "0",
    },
    {
        id: 3,
        img: prod3,
        title: "Women Ethnic",
        rating: 5.0,
        author: "myshop",
        aosDelay: "0",
    },
    {
        id: 4,
        img: prod4,
        title: "trendy wear",
        rating: 5.0,
        author: "myshop",
        aosDelay: "0",
    },
    {
        id: 5,
        img: prod5,
        title: "trausers",
        rating: 5.0,
        author: "myshop",
        aosDelay: "0",
    },
];

const Products = () => {
    const [showAll, setShowAll] = useState(false);

    const handleViewAllClick = () => {
        setShowAll(true);
    };

    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* HeaderSections */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Those are top selling products in our store. Check out the best deals and offers on these items. We offer a wide range of products to suit your needs. From trendy wear to ethnic clothing, our collection is curated to provide you with the best quality and style. Don't miss out on our exclusive offers and discounts available for a limited time.</p>
                </div>
                {/* Body Sections */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {/* cardSection */}
                        {ProductsData.slice(0, showAll ? ProductsData.length : 3).map((data) => (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className='space-y-3'
                            >
                                <img src={data.img}
                                    alt=""
                                    className='h-[220px] w-[150px] object-cover rounded-md'
                                />
                                <div>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p className='text-sm text-gray-600'>{data.author}</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400' />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* view all buttons */}
                    {!showAll && (
                        <div className='flex justify-center'>
                            <button onClick={handleViewAllClick} className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>
                                View All
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;