import './Shop.css';
import SideBar from '../../components/ShopMenu/SideBar';
import { useState, useEffect, useRef } from 'react';
import { FcMenu } from 'react-icons/fc';

function Shop() {
    const [showShopMenu, setShowShopMenu] = useState(false);
    const toggleShopMenu = () => setShowShopMenu(!showShopMenu);


    return (
        <div className='shop-page'>
            <div className='shop-poster'>
                <FcMenu className='shop-menu-icon' onClick={toggleShopMenu} />
                <div className='shop-sidebar' >                    
                    <ul className='shop-menu-categories' id={showShopMenu ? 'hidden' : ''} onClick={toggleShopMenu}>
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