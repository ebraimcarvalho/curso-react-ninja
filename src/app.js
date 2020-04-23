'use strict'
import React from 'react'
import Title from './title'
import Square from './square'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      text: 'Ebraim',
      color: 'yellow'
    }
  }

  render () {
    return (
      <div>
        <div onClick={() => this.setState({
          text: 'Carvalho'
        })}>
          <Title>
            {this.state.text}
          </Title>
        </div>
        <div>
        <Square color={this.state.color}/>
        {['red', 'green', 'blue'].map((color) => (
          <button
            key={color}
            onClick={() => this.setState({ color })}
          >
            {color}
          </button>
        ))}
        </div>
      </div>
    )
  }
}

export default App
