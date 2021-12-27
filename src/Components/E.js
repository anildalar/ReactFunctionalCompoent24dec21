import React from 'react'
import F from './F';

//REact Functinal Compoents
function E({address}) {
    return (
        <>
            <h1>Today We are learning Functiona and Class Compoents {address}</h1>   
            <F final={address} />
        </>
    )
}
export default  E;
