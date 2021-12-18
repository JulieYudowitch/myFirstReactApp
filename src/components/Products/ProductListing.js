import { useSelector, useDispatch } from 'react-redux';
import Products from './Products';
import './Products.css';
import { useEffect } from 'react';
import axios from 'axios';
import { setProducts } from '../../redux/actions/productActions';

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products?limit=10')
      .catch((err) => {
        console.log('Err', err)
      });
    dispatch(setProducts(response.data));
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  console.log('products :', products);
  return (
    <div>
      <h2>Featured Products</h2>
      <Products />
    </div>
  );
};

export default ProductListing;