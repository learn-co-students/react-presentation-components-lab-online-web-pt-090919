// Code SimpleComponent Here
import React, {Component} from 'react';

export default class SimpleComponent extends Component {
  state = {
    mood: 'happy'
  }
  
  handleClick = () => {
    this.setState({mood: 'sad'})
  }
  render(){
    return(
      <div>{this.state.mood}
      <button onClick={this.handleClick}>Click to change mood</button>
      </div>
      )
  }
}
