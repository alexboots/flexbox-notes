import React from 'react';
import './Grid-image-grid.css';

export const GridImageGrid = (props) => (
  <div className="grid-image-grid">
    <h1> Grid </h1>
    <nav className="grid-container">
      <div className="normal"><img src="https://picsum.photos/200"></img></div>
      <div className="horizontal"><img src="https://picsum.photos/900/200"></img></div>
      <div className="big"><img src="https://picsum.photos/400"></img></div>
      <div className="horizontal"><img src="https://picsum.photos/800/100"></img></div>
      <div className="big"><img src="https://picsum.photos/800"></img></div>
      <div className="vertical"><img src="https://picsum.photos/200/800"></img></div>
      <div className="big"><img src="https://picsum.photos/600/200"></img></div>
      <div className="normal"><img src="https://picsum.photos/200"></img></div>
      <div className="normal"><img src="https://picsum.photos/200"></img></div>
      <div className="vertical"><img src="https://picsum.photos/300/800"></img></div>
      <div className="big"><img src="https://picsum.photos/400"></img></div>
      <div className="horizontal"><img src="https://picsum.photos/800/200"></img></div>
      <div className="big"><img src="https://picsum.photos/800"></img></div>
      <div className="normal"><img src="https://picsum.photos/200/300"></img></div>
      <div className="big"><img src="https://picsum.photos/600/200"></img></div>
      <div className="normal"><img src="https://picsum.photos/200"></img></div>
    </nav>
  </div>
)
