import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb.js';


// initialize  all components first!! 

ReactDOM.render(
  <div>
    <ImageSlider />
    <Bomb initialCount={120} />
  </div>,
  document.getElementById('root')
);
