// Code Keypad Component Herer
import React, { Component } from 'react'

export default class Keypad extends Component {


    handingKeyPress = (e) => {
        console.log('Entering password...');
        
    }

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.handingKeyPress}></input>
            </div>
        )
    }
}
