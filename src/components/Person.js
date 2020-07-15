import React from 'react'

function Person({ person }) {
    return (
        <div>
            <li>I am {person.name} I am {person.age}</li>
        </div>
    )
}

export default Person
