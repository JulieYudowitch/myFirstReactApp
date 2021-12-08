import React, { useState, useEffect } from 'react';
import './PhotoSearch.css';
import axios from 'axios';
require('dotenv').config();

function PhotoSearch() {
    const [photo, setPhoto] = useState('');
    const [clientId, setClientId] = useState(process.env.REACT_APP_API_KEY);
    const [result, setResult] = useState([]);
    const [page, setPage] = useState('1')
    
    function handleChange(event) {
        setPhoto(event.target.value);
    }

    function handleSubmit(event) {
        setPhoto(event.target.value)
    }


    const url = `https://api.unsplash.com/search/photos?per_page=20&page=${page}?&query="${photo}"&client_id=${clientId}`;
    const mobileURL = `https://api.unsplash.com/search/photos?per_page=20?page=1&query="${photo}"&client_id=${clientId}`;
    
    useEffect(() => {
      axios.get(url).then(response => {
          console.log(response);
          setResult(response.data.results);
        })
    }, [url])
    
    return (
        <div>
            <div className='image-search-bar'>
                <input className='image-search-input' onChange={handleChange} onSubmit={handleSubmit} type='text' name='photo'/>
                <img className='search-icon' src="https://img.icons8.com/doodle/48/000000/search--v1.png" alt='magnifying glass'/>
            </div>            
            <form>                       
                <div className='image-search-results-container'>
                    <div className='image-search-results'>
                        {result.map((photo) => {
                   return <img className='image-search-result-item' src={photo.urls.thumb} />
                })}
                    </div>                  
                </div>
            </form>
        </div>
    )
}

export default PhotoSearch;