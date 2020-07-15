import React from 'react'

// function FunctionalComponent() {
//     return <p></p>
// }

const FunctionalComponent = ({ name, children, description }) => {
    return (
        <div>
            <h1>FUNCTIONAL COMPONENT</h1>
            <p>props</p>
            <h1>{name}</h1>
            <p>{children}</p>
            <h2>{description}</h2>
            <ol>
                <li>Simple function recieving props and returning declatarion.</li>
                <li>Use functional components as much as possible.</li>
                <li>Absensce of 'this' keyword</li>
                <li>Solution without using State.</li>
                <li>Mainly resposible for UI.</li>
                <li>Stateles/Dumb/Presentetional</li>
            </ol>
        </div>
    );
}

export default FunctionalComponent