import React, { Component } from 'react';

class Child extends Component {
  state = { 
    todos: [],
    todo: {
      text: ""
    },
    showText: false
  }
  render() { 
    const {
      todo: {
        text
      }
    } = this.state
    const submitForm = e => {
      console.log(e)
    }

    const changeText = e => {
      let todo = {...this.state.todo};
      todo.text = e.target.value;
      this.setState({ todo })
    }

    return ( 
      <div>
        { this.state.showText ? <p className="para">I love React</p>: <p className="para">React is a Library</p> }
        <button onClick={() => {
          this.setState(prevState =>({
            showText: !prevState.showText
          }))
        }} className="show_text_btn">Show Text</button>
        <form onSubmit={submitForm}>
          <input type="text" value={text} onChange={e => changeText(e)}/>
          <button className="add_text_btn">Add</button>
        </form>
      </div>
    );
  }
}
 
export default Child;