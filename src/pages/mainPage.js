
// Step 1: Import React
import  React,{useState,useEffect} from 'react'
import { Link } from 'gatsby';
import { container,navbar } from '../components/layout.module.css';

import Navigationbar from "./dashboard";
// Step 2: Define your component
const Main = () => {


  const [image,setImage] = useState('');
  const [title,setTitle] = useState('');
  const [firstEp,setFirstEp] = useState('');
  const [lastEp,setLastEp] = useState('');
  const [language,setLanguage] = useState('');
  const [text,setText] = useState('');



  //action function

  function handleChange(e){
    console.log(e.target.value)
    setText(e.target.value)
}



    // Update the document title using the browser API
    async function searchImage(e){
     
      let response = await fetch(`https://api.tvmaze.com/search/shows?q=${text}`)
      let data = await response.json();

      e.target.value='';

      let filmName = data[0].show.name;
      let filmImage = data[0].show.image.medium
      let firstEpisode = data[0].show.premiered
      let lastEpisode = data[0].show.ended
      let language = data[0].show.language


      console.log(data[0])
        
        setImage(filmImage)
        setTitle(filmName)
        setFirstEp(firstEpisode)
        setLastEp(lastEpisode)
        setLanguage(language)
    }
  
    

  return (
    <>
    <div className={container}>
      <Navigationbar />
    </div>  
    <main >

      <div className={container}>
        <h1>Search Movie</h1>
        
          <input type='text' onChange={handleChange}/>
          <button type='submit' onClick={searchImage}> Search</button>
        
        
          <br></br>
          <br></br>
          <img src={image}/>
          <p>Name : {title}</p>
          <p>First Episode : {firstEp}</p>
          <p>Last Episode : {lastEp}</p>
          <p>Language : {language}</p>
        </div>
    </main>
    </>
    
  )
}
// Step 3: Export your component
export default Main;

