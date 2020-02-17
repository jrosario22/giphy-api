import React from "react";
import axios from "axios";
import Results from "./results";

class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageurl: [], title: "" }; //Tag for search
  }

  // Executes when page loads
  componentDidMount() {
    this.search();
  }

  search = () => {
    axios
      .get(
        "http://api.giphy.com/v1/gifs/trending?api_key=VktLrQTkPGO3xkA7IJxOgvvrJbkefodH"
      )
      .then(response => {
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
        <h2>Trending gifs</h2>
        <div className="flex-container">{images}</div>
      </div>
    );
  }
}

export default Trending;
