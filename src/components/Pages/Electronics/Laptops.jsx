import React from 'react';
import laptop1 from '/src/assets/laptop1.jpg';
import laptop2 from '/src/assets/laptop2.jpg';
import laptop3 from '/src/assets/laptop3.jpg';
import laptop4 from '/src/assets/laptop4.jpg';
import laptop5 from '/src/assets/laptop4.jpg';
import { FaStar } from 'react-icons/fa6';



const ProductsData = [
  {
    id:1,
    img: laptop1,
    title:"Phone1",
    description: "15k ETB"

  },
  {
    id:2,
    img: laptop2,
    title:"Phone2",
    description: "14k ETB"

  },
  {
    id:3,
    img: laptop3,
    title:"Phone3",
    description: "17k ETB"

  },
  {
    id:4,
    img: laptop4,
    title:"Phone4",
    description: "19k ETB"

  },
  {
    id:5,
    img: laptop4,
    title:"Phone5",
    description: "13k ETB"

  },
  {
    id:6,
    img: laptop5,
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
            <p data-aos="fade-up" className='text-sm text-primary'>Laptops</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Modern Laptops</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'> Discover our collection of modern laptops that combine performance and style. Whether you're working, gaming, or streaming, our laptops are designed to meet all your needs with the latest technology and sleek designs.</p>
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
