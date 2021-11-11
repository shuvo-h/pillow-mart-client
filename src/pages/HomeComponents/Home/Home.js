import React from 'react';
import NavigationBar from "../../Shared/NavBar/NavigationBar/NavigationBar";
import Footer from "../../Shared/FooterComponents/Footer/Footer";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Banner from '../Banner/Banner';
import PersonalizePillow from '../PersonalizePillow/PersonalizePillow';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <PersonalizePillow></PersonalizePillow>
            <FeaturedProducts></FeaturedProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;

