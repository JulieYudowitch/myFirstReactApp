import './Products.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Products() {
    const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className='product-component' key={id}>
        <Link to={`/product/${id}`}>
        <div className='product-component'>
          <div className='product-card'>
            
              <div className='product-image'>
                <img className='product-image' src={image} alt={title} />
              </div>
            
              <div className='product-content'>
                <div className='product-header'>{title}</div>
                <div>$ {price}</div>
                <div>{category}</div>
              </div>  
            
            </div>          
        </div>
        </Link>
        </div>
    )
  })
  return <>{renderList}</>
}

export default Products;