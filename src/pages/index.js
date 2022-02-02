import * as React from "react";
import Navigationbar from "./dashboard";
import { container,navbar,is_the_body} from '../components/layout.module.css';
import { StaticImage } from 'gatsby-plugin-image'



// markup
const IndexPage = () => {
  return (
    <div className={is_the_body}>
      <div className={container}>
        <Navigationbar className={navbar}/>
     

    <h1 >Search your favourite TV show</h1>
    <StaticImage
        alt="Just a Picture"
        src="https://miro.medium.com/max/696/1*JXB8i6O1Fq-rIaBOSJQi5g.png"
      />

      </div>
      

     </div> 

     
  )
}

export default IndexPage
