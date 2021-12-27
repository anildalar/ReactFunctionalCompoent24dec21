import React from 'react'
import C from './C'

//  RFC
export default function B({name}) {
    //States/ b data
    return (
        <>
            <h1>OKLABS {name}</h1>
            <C name={name} />
        </>
    )
}
