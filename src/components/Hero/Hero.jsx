import React, { useState } from 'react';
import hero1 from '../../assets/hero1.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.png';
import hero4 from '../../assets/hero4.jpg';
import Slider from 'react-slick';
import Popup from '../Popup/Popup';

const ImageList = [
    {
        id: 1,
        img: hero1,
        title: "50% off on all Kids Wear",
        description: "You can get 50% off on all kids wear. click the button below to order now, hurry up offer is limited",
    },
    {
        id: 2,
        img: hero2,
        title: "50% off on all Womens Wear",
        description: "You can get 50% off on all womens wears here. click the button below to order now, hurry up offer is limited. and also get free shipping",
    },
    {
        id: 3,
        img: hero3,
        title: "50% off on all Men's Wear",
        description: "This is mens wear. You can get 50% off on all mens wear. click the button below to order now, hurry up offer is limited",
    },
    {
        id: 4,
        img: hero4,
        title: "50% off on all Men's Wear",
        description: "this is mens wear. You can get 50% off on all mens wear. click the button below to order now, hurry up offer is limited",
    },
];

const Hero = ({ handleOrderPopup }) => {
    const [orderCount, setOrderCount] = useState(0);
    const [orderPopup, setOrderPopup] = useState(false);
    const [formShown, setFormShown] = useState(false);

    const handleOrderClick = () => {
        setOrderCount(orderCount + 1);
        if (!formShown) {
            setOrderPopup(true);
            setFormShown(true);
        } else {
            alert(`You ordered ${orderCount + 1} product(s)`);
        }
    };

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnfocus: true,
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            {/* background pattern */}
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
            {/* hero section */}
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {/* text content */}
                                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                        {data.title}
                                    </h1>
                                    <p className='text-sm'>
                                        {data.description}
                                    </p>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="300"
                                    >
                                        <button
                                            className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                                            onClick={handleOrderClick}>
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* image section */}
                                <div className='order-1 sm:order-2'>
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        className='relative z-10'>
                                        <img src={data.img} alt=""
                                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} orderCount={orderCount} />
        </div>
    );
}

export default Hero;