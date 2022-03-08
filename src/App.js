import {Component} from 'react'
import './App.css'

// Replace your code here

class App extends Component {
  state = {isChecked: false, inputValue: ''}

  onClickSave = () => {
    this.setState({
      isChecked: true,
    })
  }

  onChangeInputValue = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  editUi = () => {
    const {inputValue} = this.state

    return (
      <div>
        <input
          type="text"
          onChange={this.onChangeInputValue}
          value={inputValue}
        />
        <button type="button" onClick={this.onClickSave}>
          Save
        </button>
      </div>
    )
  }

  onClickEdit = () => {
    this.setState({
      isChecked: false,
    })
  }

  savedUi = () => {
    const {inputValue} = this.state

    return (
      <div>
        <p>{inputValue}</p>
        <button type="button" onClick={this.onClickEdit}>
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {isChecked} = this.state

    return (
      <div>
        <h1>Editable Text Input</h1>
        {isChecked ? this.savedUi() : this.editUi()}
      </div>
    )
  }
}

export default App
