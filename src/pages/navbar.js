import  React from 'react';
import { Link } from 'gatsby';
import '../styles/navbar.css';

function Navigationbar() {


  return (
    <div>
      
        <Link to="/">Home</Link>
      
        <br/>
      
        <Link to="/main">Movie Search</Link>
      
    </div>
  );
}

export default Navigationbar;