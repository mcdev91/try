import React from 'react'
import Person from './Person'

function ListRendering() {
    const names = ['Jonas', 'Kapitonas', 'Chameleonas', 'Jonas']
    const person = [
        {
            name: 'Jonas',
            age: 80,
            password: 'haha'
        },
        {
            name: 'Jone',
            age: 55,
            password: 'haha'
        },
        {
            name: 'Petras',
            age: 86,
            password: 'haha'
        },
    ]

    // const NameList = names.map(name => <ol><li>{name}</li></ol>)
    const PersonList = person.map(person => (<Person key={person.name} person={person} />))
    const NameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            <h1>List Rendering</h1>
            <ol>{PersonList}</ol>
            {/* {NameList} */}
            <div>{NameList}</div>
        </div>
    )
}

export default ListRendering
