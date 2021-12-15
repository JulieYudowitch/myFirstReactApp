import './Shop.css';
import { useState, useEffect, useRef } from 'react';
import { FcMenu } from 'react-icons/fc';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';

function Shop() {
    const [showShopMenu, setShowShopMenu] = useState(false);
    const [result, setResult] = useState([]);
    const toggleShopMenu = () => setShowShopMenu(!showShopMenu);

    useEffect(() => {
      fakestore();
    }, [])

   const fakestore = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
       const jsonData = await response.json();
       setResult(jsonData);
    }    

    return (
        <div className='shop-page'>
            <div className='shop-poster'>
                <FcMenu className='shop-menu-icon' onClick={toggleShopMenu} />
                <div className='shop-sidebar' >                    
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
                <div className='products'>
                    {result.map((values) => {
                        return (
                            <div className='product-box'>
                                <div className='product'>
                                  <h5>{values.title}</h5>
                                  <p>{values.description}</p>
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