import React from "react";
import "./SearchBar.css"

class SearchBar extends React.Component {
  render() {
    return (
      <form id="textbox"
        onSubmit={this.props.submission}
        className="searchbar">
        <input className="input" type="text" placeholder="Enter City" onChange={this.props.changeCity}/>
        <input className="submit" type="submit" value={this.props.buttonValue}
          />
      </form>
    )
  }
}

export default SearchBar;
