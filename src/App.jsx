import React, { Component, PureComponent, useState, useMemo, memo, useCallback, useEffect, useRef } from 'react';
import './App.css';

function useCounter (defaultCount) {
  const size = useSize();
  return (<div>{defaultCount},Size:{size.width}x{size.height}</div>)
}

function useCount (defaultCount) {
  const [count, setCount] = useState(defaultCount);
  const it = useRef();

  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current);
    }
  })

  return [count, setCount]
}

function useSize () {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
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

  return size
}

function App (props) {

  const [count, setCount] = useCount(0);
  const Counter = useCounter(count);
  const size = useSize();

  return (
    <div>
      <button
        type='button'
        onClick={() => { setCount(count + 1) }}
      >
        Click({count}),Size:{size.width}x{size.height}
      </button>
      {Counter}
    </div>
  )
}

export default App; 