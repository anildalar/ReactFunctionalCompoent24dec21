// Import Area
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Message from './Message';

// Creating a Functional Compoent


function Student(){
  return <>
            <strong>Nandan </strong>
            <Message />
         </>

}

function App(){

  // A function ALways return something
  // A Functional Component always return JSX structer
  return <h1>Hello <Student /> !</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('container')
);
