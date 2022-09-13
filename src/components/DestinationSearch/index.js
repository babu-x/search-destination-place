import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ' '}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filterData = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destinations-container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              className="input"
              placeholder="Search"
              onChange={this.onChangeInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="image"
            />
          </div>
          <ul className="ul-container">
            {filterData.map(eachItem => (
              <DestinationItem destinationDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
