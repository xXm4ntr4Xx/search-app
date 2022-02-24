// Step 1: Import React
import  React,{useState} from 'react';
import Navigationbar from './navbar.js';
import '../styles/main.css';

// Step 2: Define your component
const Main = () => {

// store all api element
  const [image,setImage] = useState('');
  const [title,setTitle] = useState('');
  const [firstEp,setFirstEp] = useState('');
  const [lastEp,setLastEp] = useState('');
  const [language,setLanguage] = useState('');
  const [text,setText] = useState('');
  const [link,setLink] = useState('');

  //target input function

  function handleChange(e){
    setText(e.target.value)
}
  

    // Update the document title using the browser API
    async function searchImage(e){
      e.preventDefault();
     if(!text){
       alert('no name found')
       return false
     }else{
      let response = await fetch(`https://api.tvmaze.com/search/shows?q=${text}`)
      let data = await response.json();


      let filmName = data[0].show.name;
      let filmImage = data[0].show.image.medium;
      let firstEpisode = data[0].show.premiered;
      let lastEpisode = data[0].show.ended;
      let language = data[0].show.language;
      let site = data[0].show.officialSite;


      console.log(data[0])
        
        setImage(filmImage)
        setTitle(filmName)
        setFirstEp(firstEpisode)
        setLastEp(lastEpisode)
        setLanguage(language)
        setLink(site)
     }
     e.target.reset();
    }
  
    

  return (
    
      <body>
          <div className='container-main'>
      <div>
        <Navigationbar />
        <h1>Search Movie</h1>
        <form onSubmit={searchImage}>
          <input type='text' onChange={handleChange}  />
          <button > Search</button>
        </form>
      </div>
        
          
         <div>
          <img className='image-search' src={image} alt='Tv-result'/>
          <p>Name : {title}</p>
          <p>First Episode : {firstEp}</p>
          <p>Last Episode : {lastEp}</p>
          <p>Language : {language}</p>
          <p>Offical Site : <a href={link}>{link?link:"No link available"}</a></p>
         </div>   
    </div> 
      </body>
      
  )
}

export default Main;

