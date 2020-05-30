// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            mood: "happy"
        }
    }

    handleClick = (e) => {
        let newMood
        switch(this.state.mood){
            case "happy":
                newMood = "sad"
                break
            case "sad":
                newMood = "happy"
                break
            default:
                alert("ERROR IN STATE")
        }
        this.setState({
            mood: newMood
        })
    }

    render(){
        return(
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}