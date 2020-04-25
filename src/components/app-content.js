import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, handleSearch, getRepos, getStarred }) => {
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <UserInfo userInfo={userInfo} />
      <Actions getRepos={getRepos} getStarred={getStarred} />
      <Repos repos={repos} />
      <p>Eu sou o app Content</p>
    </div>
  )
}

export default AppContent
