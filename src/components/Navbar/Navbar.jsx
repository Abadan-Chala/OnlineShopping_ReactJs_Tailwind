import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

const Menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Top Rated", link: "/top-rated" },
    { id: 3, name: "Womens Wear", link: "/womens" },
    { id: 4, name: "Mens Wear", link: "/mens" },
    { id: 5, name: "Kids Wear", link: "/kids" },
    { id: 6, name: "Brand Shoes", link: "/shoes" },
    { id: 7, name: "Jewellery", link: "/jewellery" },
];

const DropdownLinks = [
    { id: 1, name: 'Smart Phones', link: '/phones' },
    { id: 2, name: 'Laptops', link: '/laptops' },
    { id: 3, name: 'Tablets', link: '/tablets' },
    { id: 4, name: 'Smart Watches', link: '/watches' },
];

const Navbar = ({ handleOrderPopup }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40 fixed top-0 left-0 w-full'>
      {/* upper navbar */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center'>
          <div>
            <Link to="/" className='border text-white rounded-full text-2xl font-bold bg-yellow-900 hover:bg-black transform transition px-2 py-1 duration-300 hover:scale-105 hover:text-yellow-800' onClick={handleLinkClick}> 
              MyShop
            </Link>
          </div>
          {/* search bar */}
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input 
                type="text" 
                placeholder='Search'
                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-500' 
              />
              <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer'/>
            </div>
          </div>

          

          {/* Darkmode switch */}
          <div>
            <DarkMode/>
          </div>
          {/* order button */}
          <button onClick={() => handleOrderPopup()} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
          </button>
          <div>
            <Link to="/signup" className="rounded-full py-2 px-6 ml-8 border bg-yellow-800 hover:bg-yellow-600 hover:text-white transform transition duration-300 hover:scale-105">Sign Up</Link>
            <Link to="/login" className="rounded-full py-2 px-6 border bg-yellow-800 hover:bg-yellow-600 hover:text-white transform transition duration-300 hover:scale-105">Login</Link>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div data-aos="zoom-in" className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {Menu.map((data) => (
            <li key={data.id}>
              <Link to={data.link} className='inline-block px-4 hover: transform transition py-1 hover:scale-105 hover:text-primary duration-200' onClick={handleLinkClick}>
                {data.name}
              </Link>
            </li>
          ))}
          {/* dropdown links */}
          <li className='group relative cursor-pointer' ref={dropdownRef}>
            <div onClick={toggleDropdown} className='flex items-center gap-[2px] py-2 hover:text-primary rounded-full'>
              Electronics
              <span>
                <FaCaretDown className={`transition-all duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </span>
            </div>
            {dropdownOpen && ( 
              <div className='absolute z-[9999] w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <Link to={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20' onClick={handleLinkClick}>
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <Link to="/about" className="inline-block px-4 hover: transform transition py-1 hover:scale-105 hover:text-primary duration-200" onClick={handleLinkClick}>About</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;