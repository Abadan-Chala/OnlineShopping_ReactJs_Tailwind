import React from 'react';
import phone1 from '/src/assets/phone1.jpg';
import phone2 from '/src/assets/phone2.jpg';
import phone3 from '/src/assets/phone3.jpg';
import phone4 from '/src/assets/phone4.jpg';
import phone5 from '/src/assets/phone5.jpg';
import { FaStar } from 'react-icons/fa6';



const ProductsData = [
  {
    id:1,
    img: phone1,
    title:"Phone1",
    description: "15k ETB"

  },
  {
    id:2,
    img: phone2,
    title:"Phone2",
    description: "14k ETB"

  },
  {
    id:3,
    img: phone3,
    title:"Phone3",
    description: "17k ETB"

  },
  {
    id:4,
    img: phone4,
    title:"Phone4",
    description: "19k ETB"

  },
  {
    id:5,
    img: phone5,
    title:"Phone5",
    description: "13k ETB"

  },
  {
    id:6,
    img: phone5,
    title:"Phone6",
    description: "18k ETB"

  },
]

const Phones = ({handleOrderPopup}) => {
  return (
    <div>
      <div className='container'>
        {/* header Section */}
        <div className='text-center mt-28 mb-10'>
            <p data-aos="fade-up" className='text-sm text-primary'>Phones</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Smart Phones</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'> Explore the latest smartphones with cutting-edge technology, sleek designs, and powerful performance. Whether you're looking for high-resolution cameras, long-lasting batteries, or fast processors, our collection has something for everyone. Upgrade your mobile experience with our top-of-the-line smartphones.</p>
       
        </div>
        {/* body Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {ProductsData.map((data) =>(
            <div className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
              {/* image section */}
              <div className='h-[100px]'>
                <img src={data.img} alt="" 
                data-aos="zoom-in"
                className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
              </div>
              {/* details section */}
              <div className='p-4 text-center'>
                {/* star rating */}
                <div className='w-full flex items-center justify-center gap-1'>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                </div>
                <h1 className='text-xl font-bold'>{data.title}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                <button
                  className='bg-primary hover:scale-105 duration-300 text-white py-1 px-2 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                  onClick={handleOrderPopup}
                  >
                    Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 

export default Phones;
