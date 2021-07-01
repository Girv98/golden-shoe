import React, {useState} from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

const MainLayout = props => {

    const [isDark, setIsDark] = useState(true);

    return (
        <div className={`colour-wrapper ${isDark ? "dark" : "light"}`}>
            <Header isDark={isDark} setIsDark={setIsDark} />
            <div className="main-body">
                <div className="main-section">
                    {props.children}
                </div>
                <Footer/>
            </div>
        </div>
    );
};


export default MainLayout;
