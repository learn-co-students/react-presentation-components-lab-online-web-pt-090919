// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor() {
        super()
        this.state = {
            mood: 'happy'
        }
    }

    toggleMood = () => {
        if (this.state.mood === "happy") {
            this.setState({ mood: "sad" })
        } else {
            this.setState({ mood: "happy" })
        }
    }

    render() {
        return (
            <div onClick={this.toggleMood}>
                {this.state.mood}
            </div>
        )
    }
}
