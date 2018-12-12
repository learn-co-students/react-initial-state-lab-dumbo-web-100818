import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

let initialCount = 120

ReactDOM.render(
  <div>
    <ImageSlider />
    <Bomb initialCount={initialCount} />
  </div>,
  document.getElementById('root')
);
