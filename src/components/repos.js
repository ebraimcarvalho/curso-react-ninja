import React from 'react'

const Repos = ({ repos }) => {
  return (
    <div className='repo'>
      <h2 className='repo__type'>Repositórios</h2>
      <ul className='repo__list'>
        {repos.map((repo, index) => (
          <li key={index}><a href={repo.link}>{repo.name}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default Repos
