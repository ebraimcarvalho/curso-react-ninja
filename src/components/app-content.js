import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ handleSearch }) => {
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <UserInfo />
      <Actions />
      <Repos />
      <p>Eu sou o app Content</p>
    </div>
  )
}

export default AppContent
