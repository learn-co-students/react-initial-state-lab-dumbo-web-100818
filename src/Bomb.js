// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  setSeconds = () =>{
    if(this.state.secondsLeft === 0){
      return <h2>Boom!</h2>
    } else{
      return <h2>{this.state.secondsLeft} seconds left before I go boom!</h2>
    }

  }

  render(){
    return (
      this.setSeconds()
    )
  }
}
