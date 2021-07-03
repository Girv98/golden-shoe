import React from 'react';

import Card from './../Card';

const CardList = props => {

    const products = props.productsArray;
    const showOOS = props.showOOS;
    const gender = props.gender;
    const colour = props.colour;
    const size = props.size;
    const minPrice = props.minPrice;
    const maxPrice = props.maxPrice;

    return (
        <>
        {products.data.map((product, pos) => {
            const {documentID, productColour, productImage, productIsMale, productName, productPrice, productSizes} = product;
            if (!productImage || !productName || 
            typeof productPrice === 'undefined') return null;

            if (gender === "f" && productIsMale) return null;
            if (gender === "m" && !productIsMale) return null;

            if (colour !== "a" && !productColour.includes(colour)) return null;

            if (productPrice > maxPrice || productPrice < minPrice) return null;
            

            let stock = 0;
            let inSize = true;

            if (typeof productSizes !== 'undefined') {

                for (let key in productSizes) {
                    stock += productSizes[key];
                }   

                if (size !== "a") {
                    if (productSizes[size] === 0) {
                        stock = 0
                        inSize = false;
                    }
                }
            }

            return (
                <>
                {(stock > 0) && (
                    <Card key={pos}
                        name={productName} 
                        ID={documentID}
                        price={productPrice} 
                        image={productImage} 
                        sizes={productSizes}
                        colours={productColour}
                        isMale={productIsMale} 
                        stock={stock}
                        inSize={inSize} />
                )}

                {(stock === 0) && showOOS && (
                    <Card key={pos}
                        name={productName} 
                        ID={documentID}
                        price={productPrice} 
                        image={productImage} 
                        sizes={productSizes}
                        colours={productColour}
                        isMale={productIsMale}
                        stock={stock} 
                        inSize={inSize} />
                )}
                </>
            );
        })}
        </>

    );
};


export default CardList;
