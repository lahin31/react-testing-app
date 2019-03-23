import React from 'react'
import Child from "./Child"
export default class App extends React.Component {
  state = {
    todos: []
  }
  render() {
    return (
      <div>
        <h1>React App Testing</h1>
        <Child todos={this.state.todos} />
      </div>
    )
  }
}