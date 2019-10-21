import React from 'react';
import './Flex-base.css';
import './Flex-img-grid.css';

export const FlexImgGrid = (props) => (
  <>
    <h1> Flex Img Grid </h1>
    <div className="container img-grid">
      <div className="normal"><img src="https://picsum.photos/200"></img></div>
      <div className="normal"><img src="https://picsum.photos/300/200"></img></div>
      <div className="big"><img src="https://picsum.photos/400"></img></div>
      <div className="normal"><img src="https://picsum.photos/200/100"></img></div>
      <div className="big"><img src="https://picsum.photos/800"></img></div>
      <div className="normal"><img src="https://picsum.photos/200/300"></img></div>
      <div className="big"><img src="https://picsum.photos/600/200"></img></div>
      <div className="normal"><img src="https://picsum.photos/200"></img></div>
    </div>
  </>
)
