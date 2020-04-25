import React from 'react'

const UserInfo = ({ userInfo }) => {
  return (
    <div className='user'>
      <img className='user__img' src={userInfo.photo} alt='Ebraim Carvalho' />
      <div className='user__info'>

        <a href={`https://github.com/${userInfo.login}`} rel='noopener noreferrer' target='_blank'><h1 className='user__name'>{userInfo.name}</h1></a>

        <ul className='user__list'>
          <li>Repositórios: {userInfo.repos}</li>
          <li>Seguidores: {userInfo.followers}</li>
          <li>Seguindo: {userInfo.following}</li>
        </ul>
      </div>
    </div>
  )
}

export default UserInfo
