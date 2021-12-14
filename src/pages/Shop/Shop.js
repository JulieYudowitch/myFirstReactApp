import './Shop.css';
import { useState, useEffect, useRef } from 'react';
import { FcMenu } from 'react-icons/fc';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';

function Shop() {
    const [showShopMenu, setShowShopMenu] = useState(false);
    const [result, setResult] = useState([])
    const toggleShopMenu = () => setShowShopMenu(!showShopMenu);
    

    return (
        <div className='shop-page'>
            <div className='shop-poster'>
                <FcMenu className='shop-menu-icon' onClick={toggleShopMenu} />
                <div className='shop-sidebar' >                    
                    <ul id={showShopMenu ? 'hidden' : 'shown'} onClick={toggleShopMenu}>
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
                  
                </div>
            </div>
            
        </div>
    )
}

export default Shop;