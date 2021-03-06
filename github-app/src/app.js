'use strict'
import React from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      typeRepo: '',
      isFetching: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      this.setState({
        isFetching: true
      })
      ajax().get(`https://api.github.com/users/${value}`)
        .then(result => {
          this.setState({
            userInfo: {
              name: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: []
          })
        })
        .always(() => this.setState({ isFetching: false }))
        .catch(err => alert('Usuário não encontrado!'))
      e.target.value = ''
    }
  }

  getRepos (type) {
    return (e) => {
      this.setState({
        typeRepo: type
      })
      const username = this.state.userInfo.login
      ajax().get(`https://api.github.com/users/${username}/${type}`)
        .then(result => {
          this.setState({
            repos: result.map(repo => ({
              name: repo.name,
              link: repo.html_url
            }))
          })
        })
    }
  }

  render () {
    return (
      <div>
        <AppContent
          {...this.state}
          handleSearch={this.handleSearch}
          getRepos={this.getRepos('repos')}
          getStarred={this.getRepos('starred')}
        />
      </div>
    )
  }
}

export default App
