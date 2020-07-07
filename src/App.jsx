import React, { Component, PureComponent, memo } from 'react';
import './App.css';

const Foo = memo(function Foo (props) {
  console.log('Foo render');
  return (
    <div>{props.person.age}</div>
  )
})

class App extends Component {
  state = {
    count: 1,
    person: {
      age: 1
    }
  }

  callback = () => { }

  render () {
    const { person } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            person.age++
            this.setState({
              person
            })
          }}
        >
          add
        </button>
        <Foo
          person={person}
          cb={this.callback}
        />
      </div>
    )
  }
}

export default App; 
