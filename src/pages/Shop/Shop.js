import './Shop.css';
import { useState, useEffect, useRef } from 'react';
import { GrMenu } from 'react-icons/gr';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import ProductListing from '../../components/Products/ProductListing';

function Shop() {
    const [showShopMenu, setShowShopMenu] = useState(false);
    const toggleShopMenu = () => setShowShopMenu(!showShopMenu);
    

        return (
            <div className='shop-page'>

                <div className='shop-poster'>
                
                    <div className='shop-menu'>
                        <div className='shop-searchbar'>
                            <GrMenu className='shop-menu-icon' onClick={toggleShopMenu} />
                            <input className='shop-search' inputmode='search' placeholder='search' type='search'></input>
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

                    <div  className='products-box'>
                        <ProductListing />
                    </div>

                </div>
            
            </div>
        )
    }

    export default Shop;