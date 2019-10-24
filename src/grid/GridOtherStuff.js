import React from 'react';
import './Grid-other-stuff.css';

export const GridOtherStuff = (props) => (
  <>
    <div className="grid-named-sections">
      <h1> Grid </h1>
      <nav className="grid-container">
        <div className="header">header</div>
        <div className="menu">menu</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </nav>
    </div>
    <div className="grid-align-justify-grid">
      <h1> Grid </h1>
      <nav className="grid-container">
        <div className="header">header</div>
        <div className="menu">menu</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </nav>
    </div>
    <div className="grid-align-justify-items">
      <h1> Grid </h1>
      <nav className="grid-container">
        <div className="header">header</div>
        <div className="menu">menu</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </nav>
    </div>
  </>
)
