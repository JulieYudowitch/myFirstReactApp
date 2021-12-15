import './Shop.css';
import { useState, useEffect, useRef } from 'react';
import { GrMenu } from 'react-icons/gr';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';

function Shop() {
    const [showShopMenu, setShowShopMenu] = useState(false);
    const [endPoint, setEndPoint] = useState('products');
    const [result, setResult] = useState([]);
    const toggleShopMenu = () => setShowShopMenu(!showShopMenu);

    useEffect(() => {
      fakestore();
    }, [])

   const fakestore = async () => {
        const response = await fetch(`https://fakestoreapi.com/${endPoint}?limit=6`);
       const jsonData = await response.json();
       setResult(jsonData);
    }    

    return (
        <div className='shop-page'>

            <div className='shop-poster'>
                
                <div className='shop-menu'>
                    <div className='shop-searchbar'>
                      <GrMenu className='shop-menu-icon' onClick={toggleShopMenu} />
                      <input className='shop-search' placeholder='search' type='search'></input>
                    </div>
                    
                  <div className='shop-sidebar-menu' >                    
                    <ul id={!showShopMenu ? 'hidden-menu' : 'shown'} onClick={toggleShopMenu}>
                        <li>Women's</li>
                        <li>Men's</li>
                        <li>Children's</li>
                        <li>Accessories</li>
                        <li>Gifts</li>
                        <li>Jewelry</li>
                        <li>Home Decor</li>
                    </ul>
                  </div>
                </div>

                <div className='products'>
                    {result.map((values) => {
                        return (
                            <div className='product-box'>
                                <div className='product'>
                                  <h5>{values.title}</h5>
                                  <p>{values.price}</p>
                                </div>
                                <img src={values.image}/>                                
                          </div>
                      )
                  })}
                </div>

            </div>
            
        </div>
    )
}

export default Shop;