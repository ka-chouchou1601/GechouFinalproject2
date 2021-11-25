import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Slider from '../components/Slider';


const Home = () => {
    return (
        <div>
        <Announcement/>
           <Navbar/>
           <Slider/>
           <Categories/>
           
           <Newsletter/>
           <Footer/>
        </div>
    );
};

export default Home;
