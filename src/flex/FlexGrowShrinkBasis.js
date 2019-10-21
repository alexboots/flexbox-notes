import React from 'react';
import './Flex-base.css';
import './Flex-grow-shrink-basis.css';

export const FlexGrowShrinkBasis = (props) => (
  <>
  <h1> Flex Grow Shrink Basis </h1>
  <nav className="container grow-shrink-basis">
    <div className="hey">see no evil</div>
    <div className="there">see no evil</div>
  </nav>
  </>
)