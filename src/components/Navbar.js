import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div >
        <div className='navbar'>
        <Link to='/'>
          
        <p >MAANIS</p>
</Link>
            <Link to='/contact'>
          
                    <p className='contact'>CONTACT</p>
            </Link>
        </div>
     
    </div>
  );
}

export default Navbar;
