import React from 'react'

const UserInfo = () => {
  return (
    <div>
      <img className='user__img' src='https://avatars1.githubusercontent.com/u/50751483?s=460&u=edece9054d58418afcf976c164fe2daca5962c15&v=4" alt="Ebraim Carvalho' />
      <div className='user__info'>
        <a href='https://github.com/ebraimcarvalho'><h1 className='user__name'>Ebraim Carvalho</h1></a>
        <p>Repositórios: 29</p>
        <p>Seguidores: 29</p>
        <p>Seguindo: 29</p>
      </div>
    </div>
  )
}

export default UserInfo
