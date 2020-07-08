import React, { Component, useState, createContext, useContext } from 'react';
import './App.css';

const CountContext = createContext()

function Counter () {

  const count = useContext(CountContext)

  return (<div>{count}</div>)
}

function App2 () {

  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        type='button'
        onClick={() => { setCount(count + 1) }}
      >
        Click({count})
    </button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}


export default App2; 
