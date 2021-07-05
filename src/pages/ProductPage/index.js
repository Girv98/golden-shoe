import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';

import SizeButtons from './../../components/SizeButtons';

const mapState = state => ({
  product: state.productsData.product
});


const ProductPage = props => {
    const dispatch = useDispatch();

    const { productID } = useParams();
    const { product } = useSelector(mapState);

    
    const [size, setSize] = useState("a");

    const [buyable, setBuyable] = useState(false);


    useEffect(() => {
      if (product.productSizes && product.productSizes[Number(size)] > 0) {
        setBuyable(true);
      } else {
        setBuyable(false);
      }

    }, [size,product.productSizes])

    // const {
    //     productImage,
    //     productName,
    // } = product;


    useEffect(() => {
        dispatch(
          fetchProductStart(productID)
        )
    
        return () => {
          dispatch(
            setProduct({})
          )
        }
    
      }, [dispatch, productID]);




    //   const handleAddToCart = (product) => {
    //     if (!product) return;
    //     dispatch(
    //       addProduct(product)
    //     );
    //     history.push('/cart');
    //   }

    //console.log(product)

    return (
        <section className="wrapper--product">

          <div id="open-modal" className="modal">
            <div>
              <a href="#" title="Close" className="modal__close">Close</a>
              <h1>Size Guide</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum pariatur voluptas fugiat magnam, ratione fuga laboriosam, inventore nulla porro delectus, in necessitatibus beatae? Voluptate.</p>
            </div>
          </div>


          <div className="wrapper--image">
            <img className="product--image" src={product.productImage} alt="" />
          </div>
          
          <div className="product--info">
            <h1 className="product--name">{product.productName}</h1>
            <h3 className="product--price">£{product.productPrice}</h3>
          </div>

          <div className="product--options">
            <div className="wrapper--size"> 
              <div className="size__title">
                  <h4 className="title--left">Select Size</h4>  
                  <a className="title--right" href="#open-modal">sizeguide</a>
              </div>
              <SizeButtons size={size} setSize={setSize} />
            </div>

            <button className={`button add--button ${buyable ? "is--active" : "is--not-active"}`} disabled={!buyable} title={`${buyable ? "Add to bag" : "Please choose available size"}`}>
              {buyable &&
              "Add to Bag" 
              }
              {!buyable && size !== "a" &&
              "Not available in this size" 
              }
              { size === "a" &&
                "Please choose a size"
              }
            </button>
          </div>
        </section>
    );
}

export default ProductPage;