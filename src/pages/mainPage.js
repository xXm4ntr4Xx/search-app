// Step 1: Import React
import  React,{useState} from 'react'
import { container, is_the_body, p} from '../components/layout.module.css';

import Navigationbar from "./dashboard";
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
  //clearing the input text after a submit
    let clear = (e) => e.target.value='';

    // Update the document title using the browser API
    async function searchImage(){
     if(!text){
       alert('no name found')
       return false
     }else{
      let response = await fetch(`https://api.tvmaze.com/search/shows?q=${text}`)
      let data = await response.json();


      let filmName = data[0].show.name;
      let filmImage = data[0].show.image.medium
      let firstEpisode = data[0].show.premiered
      let lastEpisode = data[0].show.ended
      let language = data[0].show.language
      let site = data[0].show.officialSite


      // console.log(data[0])
        
        setImage(filmImage)
        setTitle(filmName)
        setFirstEp(firstEpisode)
        setLastEp(lastEpisode)
        setLanguage(language)
        setLink(site)
     }
    }
  
    

  return (
    <>
    <div className={container}>
      <Navigationbar />
    </div>  
    <main className={is_the_body}>

      <div style={{backgroundColor: 'hsl(180, 2%, 80%)',textAlign: 'center',height:'auto'}}>
        <h1>Search Movie</h1>
        
          <input type='text' onChange={handleChange} onClick={clear} />
          <button type='click' onClick={searchImage}> Search</button>
        
        
          <br></br>
          <br></br>
          <img src={image} alt='Tv-image'/>
          <p>Name : {title}</p>
          <p>First Episode : {firstEp}</p>
          <p>Last Episode : {lastEp}</p>
          <p>Language : {language}</p>
          <p>Offical Site : <a href={link}>{link}</a></p>
        </div>
    </main>
    </>
    
  )
}
// Step 3: Export your component
export default Main;

