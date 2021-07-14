

import {useState, useEffect} from 'react'; 
import './App.scss';
const api = '6a2bc1233f7854d7a66b3b365c3679fd'; 
const secret = '6fc93a132e08a7b2'; 

const App = () =>  {
const [flickr, setFlickr] = useState({})

const getImage = async function () {
  const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'; 
  const result = await fetch(url,{ method: 'GET',
  mode: 'cors',
});
  debugger;  
  const json = await result.json();
  debugger;  
  setFlickr(json); 
}

useEffect(() => getImage(), []); 

  const image = ''
  const photoTitle = ''
  const author = ''
  const description = '' 
  return (
    <div className="container">
      <div className="photo">
        <img src={image} alt={photoTitle} />
        </div> 

      <div className="content">
<h1> {photoTitle}  {author} </h1>
<p>{description} </p>
      </div>

    </div>
  );
}

export default App;
