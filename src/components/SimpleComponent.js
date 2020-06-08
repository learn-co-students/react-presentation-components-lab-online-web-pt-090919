// Code SimpleComponent Here

import React, { PureComponent } from 'react'

class SimpleComponent extends PureComponent {
    state = {
        mood: "happy"
    }

    render() {
        return(
            <div onClick={this.handleClick} >
                {this.state.mood}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            mood: "sad"
        })
    }
}

export default SimpleComponent