import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

function Navigation() {
  const menu = [{
    title: 'Home',
    to: '/',
  },
  {
    title: 'Products',
    to: '/products',
  },
  {
    title: 'Movies',
    to: '/movies',
  }];

  return (
    <Nav>
      {
        menu.map((object) => <StyledNavLink as={Link} to={object.to} key={object.title}>{object.title}</StyledNavLink>)
      }
      <Nav.Link href="/">Test</Nav.Link>
    </Nav>
  );
}

const StyledNavLink = styled(Nav)`
  display: block;
  padding: .5rem 1rem;
  background: grey;
  color: purple;
  
`;

export default Navigation;
