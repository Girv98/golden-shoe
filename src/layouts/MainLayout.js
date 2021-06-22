import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

const MainLayout = props => {
    return (
        <>
            <Header/>
            <div className="main-body">
                <div className="main-section">
                    {props.children}
                </div>
                <Footer/>
            </div>
        </>
    );
};


export default MainLayout;
