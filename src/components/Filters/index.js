import React, {useState} from 'react';

import MultiRangeSlider from './../../components/MultiRangeSlider'; 

function Filters() {

    return (
        // Gender
        // -    Radials
        // -    Men/Women/Unisex
        
        // Size
        //  -   Multipicker Grid
        //      3, 3.5, 4, 4.5
        //      5, 5.5, 6, 6.5
        //      7, 7.5, 8, 8.5 etc.
        
        // Colour
        //  -   Multipicker
        //  -   Grid of sizes, i.e. red, blue, black
        
        // Price
        //  -   MinMax Slider

        <MultiRangeSlider min={0} max={300} />
    );
};


export default Filters;
