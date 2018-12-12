// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }






  render(){
    const seconds = (this.state.secondsLeft === 0)? 'boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <h1> {seconds} </h1>
    )
  }


}
