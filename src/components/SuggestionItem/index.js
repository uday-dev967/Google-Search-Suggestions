import './index.css'
import {Component} from 'react'

class SuggestionItem extends Component {
  onClickSuggestion = () => {
    const {item, updateSearchInput} = this.props
    const {suggestion} = item
    updateSearchInput(suggestion)
  }

  render() {
    const {item} = this.props
    const {suggestion} = item

    return (
      <li className="list-item" onClick={this.onClickSuggestion}>
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </li>
    )
  }
}

export default SuggestionItem
