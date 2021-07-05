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

    console.log(product)

    return (
        <section className="product-wrapper">
          <div className="image-wrapper">
            <img className="product-image" src={product.productImage} alt="" />
          </div>
          <div className="product-info">
            <h1 className="product-name">{product.productName}</h1>
            <h3>£{product.productPrice}</h3>

            <div className="input-wrapper">   
              <button>sizeguide</button>
              <SizeButtons size={size} setSize={setSize} />
              
            </div>

            <button className={`button add--button ${buyable ? "is--active" : "is--not-active"}`} disabled={!buyable}>
              {buyable ? "Add to basket" : "Please choose available size"}
            </button>
          </div>
        </section>
    );
}

export default ProductPage;