import React from 'react';
import './Grid-template-areas.css';

export const GridTemplateAreas = (props) => (
  <div className="grid-template-areas">
    <h1> Grid </h1>
    <nav className="grid-container">
      <div className="header">header</div>
      <div className="menu">menu</div>
      <div className="content">content</div>
      <div className="footer">footer</div>
    </nav>
  </div>
)
