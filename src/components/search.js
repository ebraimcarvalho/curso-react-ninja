import React from 'react'

const Search = ({ handleSearch }) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Digite o nome do usuário'
        onKeyUp={handleSearch}
      />
    </div>
  )
}

export default Search
