import React from 'react'
import E from './E'

export default function D({surname}) {
    return (
        
           <React.Fragment>
                <h1>Today is our 13th Lecture {surname}</h1>
                <E address={surname} />
            </React.Fragment> 
    )
}

/* 
//React Class Components
export default class D extends Component {
    //1. property

    //2. Constructor

    //3. MEthod
    render() {
        return (
            
        )
    }
}
 */