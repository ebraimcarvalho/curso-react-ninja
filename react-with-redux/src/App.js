import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <input type="text"/>
        <ul>
          <li style={{ textDecoration: 'line-through' }}>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
        <div>
          <h3>Mostrar</h3>
          <span>Todos</span> | 
          <a href="#">Finalizados</a> | 
          <a href="#">A Fazer</a>
        </div>
      </div>
    )
  }
}

export default App