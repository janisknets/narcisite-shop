import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </>
  );
}

export default Navigation;
