// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  switchButton = () => {
    const {text} = this.state
    const element = document.getElementById('button')
    const message = element.textContent
    console.log(message)
    if (text === 'Subscribe') {
      this.setState(prevState => ({text: 'Subscribed'}))
    }
    if (text === 'Subscribed') {
      this.setState(prevState => ({text: 'Subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="button" id="button" onClick={this.switchButton}>
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
