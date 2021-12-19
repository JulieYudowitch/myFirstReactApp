import './Products.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { image, price, title, category, description } = product;
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log('Err ', err);
            });
        dispatch(selectedProduct(response.data));
    };

    function goBack() {
  window.history.back()
}
    useEffect(() => {
        if (productId && productId !== '') fetchProductDetail(productId);
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);

    return (
        <div className='product-detail-page'>
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div>
                    <div className='product-detail-card'>
                        <p className='product-detail-title'>{title}</p>
                        <img src={image} className='product-detail-image' />
                        <p className='product-detail-price'>{price}</p>
                        <p className='product-detail-description'>{description}</p>
                        <button onClick={goBack}>Return to shop</button>
                    </div>
                </div>
            )}
        </div>
            
    );
};

export default ProductDetail;