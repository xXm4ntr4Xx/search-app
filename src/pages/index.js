import React from "react";
import Navigationbar from './navbar.js';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/index.css'



// markup
const IndexPage = () => {
  return (

    <body>
      <div className='container-index'>
        <Navigationbar />
    <h1 className="header1">Search your favourite movie/anime</h1>
    <br/>
    <StaticImage
        alt="Just a Picture"
        src="https://as1.ftcdn.net/v2/jpg/02/93/13/34/1000_F_293133495_Adpt8Hupr2PESBNsMEiil781StAyWCMX.jpg"
      />
      
     </div>    
    </body>
    
  )
}

export default IndexPage
