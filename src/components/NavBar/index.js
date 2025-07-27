import React from 'react';
import CartWidget from '../CartWidget';

function NavBar() {
  return (
    <nav className='navbar'>
      <h1>TEKI</h1>
      <CartWidget/>
    </nav>
  );
}

export default NavBar;