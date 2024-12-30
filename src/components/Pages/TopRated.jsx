import React from 'react';
import Top1 from '../../assets/prod5.jpg';
import Top2 from '../../assets/prod3.jpg';
import Top3 from '../../assets/prod2.jpg';
import Top4 from '../../assets/prod4.png';
import Top5 from '../../assets/prod1.png';
import { FaStar } from 'react-icons/fa6';



const ProductsData = [
  {
    id:1,
    img: Top1,
    title:"Mens Wear",
    description: "this is the top rated product in the market which is very comfortable and stylish to wear."

  },
  {
    id:2,
    img: Top2,
    title:"females Wear",
    description: "female wear is the top rated product in the market which is very comfortable and stylish to wear."

  },
  {
    id:3,
    img: Top3,
    title:"family Wear",
    description: "family wear is the top rated product in the market which is very comfortable and stylish to wear."

  },
  {
    id:4,
    img: Top4,
    title:"cold wear",
    description: "cold wear is the top rated product in the market which is very comfortable and stylish to wear."

  },
  {
    id:5,
    img: Top5,
    title:"T-shirts",
    description: "T-shirts is the top rated product in the market which is very comfortable and stylish to wear."

  },
  {
    id:6,
    img: Top5,
    title:"Sweters",
    description: "sweters is the top rated product in the market which is very comfortable and stylish to wear."

  },
]

const TopRated = ({handleOrderPopup}) => {
  return (
    <div>
      <div className='container'>
        {/* header Section */}
        <div className='text-center mt-28 mb-10'>
            <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Those are the best products available in our shop.</p>
        </div>
        {/* body Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {ProductsData.map((data) =>(
            <div className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
              {/* image section */}
              <div className='h-[100px]'>
                <img src={data.img} alt="" 
                data-aos="zoom-in"
                className='max-w-[120px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
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
                  className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
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

export default TopRated;
