import React, { Component } from 'react'

export default class Keypad extends Component{
    onKey = ()=>{
        console.log('Entering password...')
    }
    render(){
        return(
            <input onKeyUp={this.onKey}
            type="password"></input>
        )
    }
}
