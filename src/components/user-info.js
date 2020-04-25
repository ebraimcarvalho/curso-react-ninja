import React from 'react'

const UserInfo = ({ userInfo }) => {
  return (
    <div>
      <img className='user__img' src={userInfo.photo} alt='Ebraim Carvalho' />
      <div className='user__info'>
        <a href={userInfo.login}><h1 className='user__name'>{userInfo.name}</h1></a>
        <p>Repositórios: {userInfo.repos}</p>
        <p>Seguidores: {userInfo.followers}</p>
        <p>Seguindo: {userInfo.following}</p>
      </div>
    </div>
  )
}

export default UserInfo
