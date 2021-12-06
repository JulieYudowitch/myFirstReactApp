const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('whaa why isnt nodemon doin its thing')
})

app.get('/', (req, res) => {
    res.json('why isnt nodemon doin its thing')
})

app.listen(8000, () => console.log(`Server is running on PORT ${PORT}`))

/* const [photo, setPhoto] = useState('');
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
                <div className='search-bar'>
                  <input className='image-search-input' onChange={handleChange} type='text' name='photo' />
                  <img className='search-icon' src="https://img.icons8.com/doodle/48/000000/search--v1.png"/>
                </div>       
                <div className='image-search-results'>
                  {result.map((photo) => {
                   return <img src={photo.urls.small} />
                })}
                </div>
            </form>
        </div> */