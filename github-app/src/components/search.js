import React from 'react'

const Search = ({ isDisabled, handleSearch }) => {
  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Digite o nome do usuário'
        disabled={isDisabled}
        onKeyUp={handleSearch}
      />
    </div>
  )
}

export default Search
