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
     

    <h1 >Thi is the firt example of website with gatsby</h1>
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://miro.medium.com/max/696/1*JXB8i6O1Fq-rIaBOSJQi5g.png"
      />

      </div>
      

     </div> 

     
  )
}

export default IndexPage
