import React from 'react';
import Top1 from '../../assets/shoe1.jpg';
import Top2 from '../../assets/shoe2.jpg';
import Top3 from '../../assets/shoe3.jpg';
import Top4 from '../../assets/shoe4.jpg';
import Top5 from '../../assets/prod5.jpg';
import { FaStar } from 'react-icons/fa6';



const ProductsData = [
  {
    id:1,
    img: Top1,
    title:"brand shoes",
    description: "this is the top rated product in the market which is very comfortable and stylish to wear."

  },
  {
    id:2,
    img: Top2,
    title:"fashion shoes",
    description: "this is fashion shoes is the top rated product in the market which is very comfortable and stylish to wear."

  },
  {
    id:3,
    img: Top3,
    title:"skin shoes",
    description: "this is the top rated product in the market which is very comfortable and stylish to wear."

  },
  {
    id:4,
    img: Top4,
    title:"Casual Wear",
    description: "dsejdhjhfadkjfkfra0ejkdn  jajejfdkjelavfe sleipaeai opaemjeifed"

  },
  // {
  //   id:5,
  //   img: Top5,
  //   title:"Casual Wear",
  //   description: "dsejdhjhfadkjfkfra0ejkdn  jajejfdkjelavfe sleipaeai opaemjeifed"

  // },
  // {
  //   id:6,
  //   img: Top5,
  //   title:"Casual Wear",
  //   description: "dsejdhjhfadkjfkfra0ejkdn  jajejfdkjelavfe sleipaeai opaemjeifed"

  // },
]

const Shoes = ({handleOrderPopup}) => {
  return (
    <div>
      <div className='container'>
        {/* header Section */}
        <div className='text-center mt-28 mb-10'>
            <p data-aos="fade-up" className='text-sm text-primary'>Shoes</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold mb-4'>Brand Shoes</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>This is the best collection of brand shoes available in the market. Explore our wide range of stylish and comfortable shoes that suit every occasion. </p>
        
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

export default Shoes;
