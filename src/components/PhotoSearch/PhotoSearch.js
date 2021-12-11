import { TiArrowForwardOutline, TiArrowBackOutline } from 'react-icons/ti';
import { AiOutlineSearch } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import './PhotoSearch.css';
import axios from 'axios';
require('dotenv').config();


function PhotoSearch() {
    const clientId = process.env.REACT_APP_API_KEY;
    const [photo, setPhoto] = useState('');
    const [result, setResult] = useState([]);
    const [page, setPage] = useState('1')
    const [deliveryPhoto, setDeliveryPhoto] = useState('');
    
    function handleChange(event) {
        setDeliveryPhoto(event.target.value);
    }

    function handleSubmit(event) {
        setPhoto(deliveryPhoto)
    }

    function handleClickFwd(event) {
        setPage((page + 1))
        event.preventDefault();
    }

    function handleClickBack(event) {
        setPage((page - 1))
        event.preventDefault();
    }

    function handleKeyPress(event) {
       if (event.charCode === 13) {
           setPhoto(deliveryPhoto);
       }
    }

    const url = `https://api.unsplash.com/search/photos?per_page=20&page=${page}?&query="${photo}"&client_id=${clientId}`;
    
    useEffect(() => {
      axios.get(url).then(response => {
          console.log(response);
          setResult(response.data.results);
        })
    }, [url])
    
    return (
        <div className='image-search-component'>

            <div className='image-search-bar'>
                <input className='image-search-input' inputmode='search' onChange={handleChange} onKeyPress={handleKeyPress} placeholder='Enter a category' name='photo' type='search' />
                <button type='submit' onClick={handleSubmit} className='image-search-icon'><AiOutlineSearch /></button>                
            </div>   
            
            <div >
                <div>
                    <div className='image-search-results-container'>                                            
                    {result.map((photo) => {
                        return <div>
                                 <img className='image-search-result-item' src={photo.urls.thumb} />                                    
                               </div>                            
                    })}                        
                     </div>                       
                </div>
            </div>

            {
                !photo && <div className='image-search-prod image-search-overlay'>
                    <p className='image-search-greeting'>Sometimes I like to just take a minute and look at pictures of cats.  What will you search for?</p>
                </div>
            }
            
            {
              photo && <div className='arrows'>
                         <button className='arrow'><TiArrowBackOutline className='arrow' onClick={handleClickBack}/></button>
                         <button className='arrow'><TiArrowForwardOutline className='arrow' onClick={handleClickFwd}/></button>
                        </div>
            }
        </div>
    )
}

export default PhotoSearch;