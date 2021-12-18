import './Products.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

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
                    <div>
                        <p>{title}</p>
                        <img src={image}/>
                        <p>{price}</p>
                        <p>{category}</p>
                        <p>{description}</p>
                    </div>
                </div>
            )}
        </div>
            
    );
};

export default ProductDetail;