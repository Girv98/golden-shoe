import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';

const mapState = state => ({
    product: state.productsData.product
  });


const ProductPage = ({}) => {
    const dispatch = useDispatch();

    const { productID } = useParams();
    const { product } = useSelector(mapState);

    const {
        productImage,
        productName,
    } = product;


    useEffect(() => {
        dispatch(
          fetchProductStart(productID)
        )
    
        return () => {
          dispatch(
            setProduct({})
          )
        }
    
      }, []);

    //   const handleAddToCart = (product) => {
    //     if (!product) return;
    //     dispatch(
    //       addProduct(product)
    //     );
    //     history.push('/cart');
    //   }


    return (
        <section>
            <img src={productImage} alt="" />
        </section>
    );
}

export default ProductPage;