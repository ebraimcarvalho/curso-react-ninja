'use strict'
import React from 'react'
import AppContent from './components/app-content'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        name: 'Ebra',
        photo: 'https://avatars1.githubusercontent.com/u/50751483?s=460&u=edece9054d58418afcf976c164fe2daca5962c15&v=4',
        login: 'https://github.com/ebraimcarvalho',
        repos: 33,
        followers: 17,
        following: 54
      },
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    console.log(e.target.value)
  }

  getRepos (e) {
    console.log('get repos of type: ')
  }

  render () {
    return (
      <div>
        <AppContent
          {...this.state}
          repos={this.state.repos}
          handleSearch={this.handleSearch}
          getRepos={this.getRepos}
          getStarred={this.getRepos}
        />
      </div>
    )
  }
}

export default App
