import React from "react";
import axios from "axios";
import Results from "./results";

class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props, imageurl: [] }; //Tag for search
  }

  // Executes when page loads
  componentDidMount() {
    this.search();
  }

  search = () => {
    console.log(this.state);
    axios
      .get(
        "http://api.giphy.com/v1/gifs/trending?api_key=VktLrQTkPGO3xkA7IJxOgvvrJbkefodH"
      )
      .then(response => {
        this.setState({
          imageurl: response.data.data
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
        <h2>Trending gifs</h2>
        <br></br>
        {images}
      </div>
    );
  }
}

export default Trending;
