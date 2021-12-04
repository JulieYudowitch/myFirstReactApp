import React, { useState, useEffect } from 'react';
import './PhotoSearch.css';
import axios from 'axios';
require('dotenv').config();

function PhotoSearch() {
    const [photo, setPhoto] = useState('');
    const [clientId, setClientId] = useState('process.env.API_KEY');
    const [result, setResult] = useState([]);
    
    function handleChange(event) {
        setPhoto(event.target.value);
    }

    const url = `https://api.unsplash.com/search/photos?page=1&query="${photo}"&client_id=${clientId}`;
    
    useEffect(() => {
      axios.get(url).then(response => {
          console.log(response);
          setResult(response.data.results);
        })
    }, [url])
    
    return (
        <div>
            <form>
                <div className='searchBar'>
                  <input onChange={handleChange} type='text' name='photo' />
                  <img className='image' src="https://img.icons8.com/doodle/48/000000/search--v1.png"/>
                </div>           

                <div className='photos'>
                  {result.map((photo) => {
                   return <img src={photo.urls.small} />
                })}
                </div>
            </form>
        </div>
    )
}

export default PhotoSearch;