'use strict'
import React from 'react'
import AppContent from './components/app-content'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  handleSearch (e) {
    console.log(e.target.value)
  }

  render () {
    return (
      <div>
        <AppContent handleSearch={this.handleSearch} />
      </div>
    )
  }
}

export default App
