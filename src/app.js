'use strict'
import Title from './title'
import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      text: 'Ebraim'
    }
  }

  render () {
    return (
      <div onClick={() => this.setState({
        text: 'Carvalho'
      })}
      >
        <Title>
          {this.state.text}
        </Title>
      </div>
    )
  }
}

export default App
