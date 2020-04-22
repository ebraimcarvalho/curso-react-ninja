import React from 'react'

const Title = ({ color }) => (
  <div style={{
    backgroundColor: color,
    height: '150px',
    width: '150px'
  }}
  /> 
)

Title.defaultProps = {
  color: 'red'
}

export default Title
