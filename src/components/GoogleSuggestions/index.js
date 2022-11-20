import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChageSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image"
          />
          <div className="search-container">
            <div className="input-search-container">
              <img
                className="search-image"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              />
              <input
                type="search"
                className="input-search-element"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onChageSearchInput}
              />
            </div>

            <ul className="list-container">
              {searchResult.map(each => (
                <SuggestionItem
                  key={each.id}
                  item={each}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
