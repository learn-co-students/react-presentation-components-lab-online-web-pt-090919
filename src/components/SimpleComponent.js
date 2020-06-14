// Code SimpleComponent Here
import React, {Component} from 'react';

export default class SimpleComponent extends Component {
    state = {
       mood: "happy"
    }

    toggleMood = () => {
           this.setState(prevState => {
               return {
                    mood: prevState.mood === "happy"? "sad" : "happy"
                    }
           })
    }

    render () {
        return (
      <div onClick={this.toggleMood}>
          {this.state.mood}
      </div>
        );
    }
}