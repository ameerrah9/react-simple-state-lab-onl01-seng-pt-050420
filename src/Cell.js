import React, { Component } from 'react';

export default class Cell extends Component {

   constructor() {
        super(props)
        this.state = {
            
           color: props.value
        } //define initial state with a key of 'color' set to the 'value' prop
    }

    render() {
        return (
          <div className="cell" style={{backgroundColor: '#FFF'}}>
          </div>
        )
      }

}