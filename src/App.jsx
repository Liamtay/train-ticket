import React, { Component, PureComponent, useState, useMemo, memo, useCallback, useEffect, useRef } from 'react';
import './App.css';

// const Counter = memo(function Counter (props) {
//   console.log('Counter render1')
//   return (<div onClick={props.onClick}>{props.count}</div>)
// })

class Counter extends PureComponent {
  speak () {
    console.log(`now counter is: ${this.props.count}`)
  }
  render () {
    const { props } = this;
    return (<div onClick={props.onClick}>{props.count}</div>)
  }
}

function App (props) {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const counterRef = useRef();
  const it = useRef();

  const double = useMemo(() => {
    return count * 2;
  }, [count === 3]);

  const onClick = useCallback(() => {
    console.log('click');
    setClickCount((clickCount) => clickCount + 1);
    counterRef.current.speak()
  }, [counterRef])

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

  return (
    <div>
      <button
        type='button'
        onClick={() => { setCount(count + 1) }}
      >
        Click({count}),double:({double})
      </button>
      <Counter
        ref={counterRef}
        count={double}
        onClick={onClick}
      />
    </div>
  )
}

export default App; 
