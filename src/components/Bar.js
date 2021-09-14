import React from 'react'
import './Bar.css'

function Bar({ index, length }) {

    const barStyle = {
        height: length,
    }

    return (
        <>
            <div className="bar" style={barStyle} id={index}>

            </div>
        </>
    )
}

export default Bar;