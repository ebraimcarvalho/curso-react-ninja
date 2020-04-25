import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, isFetching, starred, handleSearch, getRepos, getStarred }) => {
  return (
    <div className='app'>
      <Search handleSearch={handleSearch} />
      {!!isFetching && <div>Buscando usuario...</div>}
      {!!userInfo && <UserInfo userInfo={userInfo} />}
      {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

      {!!repos.length && <Repos title='Repositórios: ' repos={repos} />}
      {!!starred.length && <Repos title='Favoritos: ' repos={starred} />}
      <p>Eu sou o app Content</p>
    </div>
  )
}

export default AppContent
