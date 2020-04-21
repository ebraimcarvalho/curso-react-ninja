import React from 'react'

const Title = (props) => (
  <p>Hi, {props.name}</p>
)

Title.defaultProps = {
  name: 'UEbra!'
}

export default Title
