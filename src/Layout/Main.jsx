import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/Shared/Navber/Navber';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;