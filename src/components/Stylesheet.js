import React from 'react'
import './mystyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : 'secondary'
    return (
        <div>
           <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
