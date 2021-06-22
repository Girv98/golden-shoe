import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

const MainLayout = props => {
    return (
        <>
            <Header/>
            <body>
                <div className="main-section">
                    {props.children}
                </div>
                <Footer/>
            </body>
        </>
    );
};


export default MainLayout;
