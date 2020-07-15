import React from 'react'

function FunctionalComponentClickEvent() {

    function ClickHandler() {
        alert('button clicked')
    }

    return (
        <div>
        <h1>Functional Component Click Event</h1>
            <button onClick={ClickHandler}>Click</button>
        </div>
    )
}

export default FunctionalComponentClickEvent
