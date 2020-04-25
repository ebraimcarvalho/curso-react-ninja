import React from 'react'

const Actions = ({ getRepos, getStarred }) => {
  return (
    <div>
      <button onClick={getRepos}>Repositórios</button>
      <button onClick={getStarred}>Favoritos</button>
    </div>
  )
}

export default Actions
