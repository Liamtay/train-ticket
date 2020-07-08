import React, { Component, useState, useMemo, memo, useCallback } from 'react';
import './App.css';

const Counter = memo(function Counter (props) {
  console.log('Counter render1')
  return (<div>{props.count}</div>)
})

function App2 (props) {

  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
  }, [count === 3]);

  // const onClick = useMemo(() => {
  //   return () => {
  //     console.log('click')
  //   };
  // }, []);
 
  const onClick = useCallback(() => {
    console.log('click')
  }, [])

  return (
    <div>
      <button
        type='button'
        onClick={() => { setCount(count + 1) }}
      >
        Click({count}),double:({double})
      </button>
      <Counter count={double}
        onClick={onClick}
      />
    </div>
  )
}

export default App2; 
