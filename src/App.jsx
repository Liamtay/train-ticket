import React, { Component, useState } from 'react';
import './App.css';


class App2 extends Component {
  state = {
    count: 1,
  }

  render () {
    const { count } = this.state;
    return (
      <div>
        <button
          type='button'
          onClick={() => { this.setState({ count: count + 1 }) }}
        >
          Click({count})
        </button>
      </div>
    )
  }
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

export default App; 
