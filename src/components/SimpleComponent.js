// Code SimpleComponent Here
import React, {Component} from 'react';

export default class SimpleComponent extends Component {
  state = {
    mood: 'happy'
  }
  
  handleClick = () => {
    const toggleMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({mood: toggleMood})
  }
  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
      )
  }
}
