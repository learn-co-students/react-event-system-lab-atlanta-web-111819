import React from 'react'

function EyesOnMe() {
    return (
        <button
            onFocus={() => {
                console.log('Good!')
            }}
            onBlur={() => {
                console.log('Hey! Eyes on me!')
            }}
        >Eyes On Me</button>
    )
}

export default EyesOnMe
