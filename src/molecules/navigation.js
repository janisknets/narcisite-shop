import React from 'react';
import { Link } from 'react-router-dom';

function Navigation () {
  return (
    <>
      <Link to="/" >Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/clock">Clock</Link>
    </>
  );
}

export default Navigation;
