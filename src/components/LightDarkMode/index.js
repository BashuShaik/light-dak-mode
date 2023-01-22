// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'LightMode', text: 'Light Mode'}

  changeMode = () => {
    const {mode} = this.state
    if (mode === 'LightMode') {
      return this.setState({mode: 'DarkMode', text: 'Dark Mode'})
    }
    return this.setState({mode: 'LightMode', text: 'Light Mode'})
  }

  render() {
    const {mode, text} = this.state
    return (
      <div className="con-one">
        <div className="con-two">
          <div className={mode}>
            <h1>Click to change Mode</h1>
            <button onClick={this.changeMode} type="button">
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
