import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isAnswerActive: false,
  }

  clickPlusMinus = () => {
    this.setState(prevState => ({
      isAnswerActive: !prevState.isAnswerActive,
    }))
  }

  renderAnswerText = () => {
    const {isAnswerActive} = this.state
    const {eachItem} = this.props
    const {answerText} = eachItem

    if (isAnswerActive) {
      return (
        <div>
          <hr className="line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {isAnswerActive} = this.state
    const {eachItem} = this.props
    const {questionText} = eachItem

    const iconUrl = isAnswerActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const iconAltText = isAnswerActive ? 'minus' : 'plus'

    return (
      <li className="each-item">
        <div className="question-icon-container">
          <h1 className="question-text">{questionText}</h1>
          <button
            type="button"
            className="button"
            onClick={this.clickPlusMinus}
          >
            <img src={iconUrl} alt={iconAltText} className="icon" />
          </button>
        </div>
        {this.renderAnswerText()}
      </li>
    )
  }
}

export default FaqItem
