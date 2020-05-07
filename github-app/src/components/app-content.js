import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, typeRepo, isFetching, handleSearch, getRepos, getStarred }) => {
  return (
    <div className='app'>
      <Search isDisabled={isFetching} handleSearch={handleSearch} />
      {!!isFetching && <div>Buscando usuario...</div>}
      {!!userInfo && <UserInfo userInfo={userInfo} />}
      {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

      {!!repos.length && <Repos title={typeRepo} repos={repos} />}
      {/* {!!starred.length && <Repos title='Favoritos: ' repos={starred} />} */}
      <p>Eu sou o app Content</p>
    </div>
  )
}

export default AppContent
