import React, {Component} from 'react'
export default class ImageSlider extends Component {
  constructor(){
    super();
    this.state= {CurrentSlideIndex:0}
  }

  render()
  {
    return(<div> I am on slide {this.state.CurrentSlideIndex}</div>
    )
  }
}
