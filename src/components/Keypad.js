import React from 'react'

function Keypad() {
    return <input onKeyUp={() => {
        console.log('Entering password...')
    }} type='password' />
}

export default Keypad
