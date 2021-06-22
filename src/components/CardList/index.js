import React from 'react';

import Card from './../Card';

const CardList = props => {

    const products = props.productsArray;
    const showOOS = props.showOOS;
    let show = false;

    return (

        <div className="card-wrapper">

            {products.data.map((product, pos) => {
                const {productColour, productImage, productIsMale, productName, productPrice, productSizes} = product;
                if (!productImage || !productName || 
                typeof productPrice === 'undefined') return null;

                let stock = 0;
                for (let key in productSizes) {
                    stock += productSizes[key];
                }

                return (
                    <>
                    {(stock > 0) && (
                        <Card name={productName} 
                            price={productPrice} 
                            image={productImage} 
                            sizes={productSizes}
                            colours={productColour}
                            isMale={productIsMale} 
                            stock={stock}/>
                    )}

                    {(stock == 0) && showOOS && (
                        <Card name={productName} 
                            price={productPrice} 
                            image={productImage} 
                            sizes={productSizes}
                            colours={productColour}
                            isMale={productIsMale}
                            stock={stock} />
                    )}
                    </>
                );
            })}

        </div>
    );
};


export default CardList;
