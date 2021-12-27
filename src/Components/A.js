import React, { useState } from 'react'
import B from './B'

//Functional Compoent
function A() {
    //States/ a data
    //Hook Variables
    const [x, setX] = useState(['RFC','RCC'])
    const [y, setY] = useState()
    const [news1, setNews1] = useState('Most people, on being tracked down by the police, don’t take the child back due to social stigma. ')

    return (
        <React.Fragment>
            <h1>Hello JSX Syntax</h1>
            <B name={x}  />
            <img />
        </React.Fragment>
    )
}
export default A;
// var x = 10;
// var y; 