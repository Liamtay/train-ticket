import React, { Component, useState, useEffect } from 'react';
import './App.css';


function App2 () {

  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  useEffect(() => {
    document.title = count
  })

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', onResize, false);

    return () => {
      window.removeEventListener('resize', onResize, false);
    }
  }, [])

  const onClick = () => {
    console.log('onclick');

  }

  useEffect(() => {
    document.getElementById('size').addEventListener('click', onClick, false)

    return ()=>{
      document.getElementById('size').removeEventListener('click', onClick, false)
    }
  })


  return (
    <div>
      <button
        type='button'
        onClick={() => { setCount(count + 1) }}
      >
        Click({count})
        </button>
      {count & 1 == 1 ?
        <span id='size'>size:{size.width}x{size.height}</span>
        : <p id='size'>size:{size.width}x{size.height}</p>
      }
    </div>
  )
}

function App (props) {

  const [count, setCount] = useState(() => {
    return props.defaultCount || 0;
  });

  return (
    <div>
      <button
        type='button'
        onClick={() => { setCount(count + 2) }}
      >
        Click({count})
      </button>
    </div>
  )
}

export default App2; 
