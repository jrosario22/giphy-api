import React from "react";
import axios from "axios";
import Results from "./Results";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props, imageurl: [], title: "" }; //Tag for search
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.search = this.search.bind(this);
  }

  //For when input is being placed
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  //For when search field is empty
  handleSubmit(event) {
    this.search();
    event.preventDefault();
  }

  search = () => {
    axios
      .get(
        "http://api.giphy.com/v1/gifs/search?q=" +
          this.state.value +
          "&api_key=VktLrQTkPGO3xkA7IJxOgvvrJbkefodH"
      )
      .then(response => {
        console.log(response);
        this.setState({
          imageurl: response.data.data,
          title: response.data.data
        });
      })
      .catch(function(error) {
        //Error Text
      });
  };

  render() {
    const images = this.state.imageurl.map(i => <Results i={i} />);
    return (
      <div>
        <h2>Search for a gif:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="search"
            placeholder="Search"
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <div className="flex-container">{images}</div>
      </div>
    );
  }
}

export default SearchBar;
