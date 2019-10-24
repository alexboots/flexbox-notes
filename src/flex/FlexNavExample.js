import React from 'react';
import './Flex-base.css';
import './Flex-nav-example.css';

export const FlexNavExample = (props) => (
  <>
    <h1> Flex Order </h1>
    <nav className="flex-container nav-example">
      <div>Candy</div>
      <div>Dogs</div>
      <div>Buttons</div>
      <div className="search">Search</div>
    </nav>
  </>
)
