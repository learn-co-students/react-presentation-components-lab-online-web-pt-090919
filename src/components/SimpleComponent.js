import React, { Component } from 'react';

export default class SimpleComponent extends Component{ 
    constructor(props){
        super(props)
        this.state = {mood: 'happy'}
        } 
    clicked = () =>{
      let newMood =  (this.state.mood === 'happy') ? 'sad' : 'happy';
      this.setState({mood: newMood})
    }
    render(){
        return(<div onClick={this.clicked}>
            <p>{this.state.mood}</p>
            </div>)
    }

} 

 SimpleComponent.defaultProps = {mood: 'happy'}