import  React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'gatsby';
import '../styles/navbar.css';

function Navigationbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <a>
        <Link to="/">Home</Link>
      </a>
        <br/>
      <a>
        <Link to="/main">Movie Search</Link>
      </a>
      
      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
      </Menu> */}
    </div>
  );
}

export default Navigationbar;