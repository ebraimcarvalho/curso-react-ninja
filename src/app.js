'use strict'
import Title from './title'
import React from 'react'

class App extends React.Component {
  render () {
    return (
      <div>
        {['blue', 'green', 'pink'].map((item, index) => (
          <Title key={index} color={item} />
        ))}
      </div>
    )
  }
}

export default App
