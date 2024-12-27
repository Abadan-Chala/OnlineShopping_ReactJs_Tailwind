import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import TopRated from './components/Pages/TopRated';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import Womens from './components/Pages/Womens';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Mens from './components/Pages/Mens';
import Kids from './components/Pages/Kids';
import Shoes from './components/Pages/Shoes';
import Jewellery from './components/Pages/Jewellery';
import Phones from './components/Pages/Electronics/Phones';
import Laptops from './components/Pages/Electronics/Laptops';
import Tablets from './components/Pages/Electronics/Tablets';
import Watches from './components/Pages/Electronics/Watches';
import About from './components/Pages/About';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/" element={<Hero handleOrderPopup={handleOrderPopup} />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/mens" element={<Mens/>} />
          <Route path="/kids" element={<Kids/>} />
          <Route path="/shoes" element={<Shoes/>} />
          <Route path="/jewellery" element={<Jewellery/>} />
          <Route path="/phones" element={<Phones/>} />
          <Route path="/laptops" element={<Laptops/>} />
          <Route path="/tablets" element={<Tablets/>} />
          <Route path="/watches" element={<Watches/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/top-products" element={<TopProducts handleOrderPopup={handleOrderPopup} />} />
          <Route path ="/signup" element={<SignUp/>}></Route>
          <Route path ="/login" element={<Login/>}></Route>
        </Routes>
        <Products/>
        <TopProducts handleOrderPopup={handleOrderPopup}/>
        <Banner />
        <Testimonials />
        <Subscribe />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
};

export default App;