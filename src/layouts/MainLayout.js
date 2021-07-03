import React, {useState, useEffect} from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

const MainLayout = props => {

    const storedDarkMode = JSON.parse(localStorage.getItem("DARK_MODE"));

    const [isDark, setIsDark] = useState(storedDarkMode);

    useEffect(() => {
        localStorage.setItem("DARK_MODE", JSON.stringify(isDark));
      }, [isDark]);

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
