import React from 'react';
import './Flex-base.css';
import './Flex-order.css';

export const FlexOrder = (props) => (
  <>
    <h1> Flex Order </h1>
    <nav className="container order">
      <div className="one">see no ONE</div>
      <div className="two">see no TWO</div>
      <div className="three">see no THREE</div>
      <div className="four">see no FOUR</div>
    </nav>
  </>
)
