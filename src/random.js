import React from "react";
import axios from "axios";

class Random extends React.Component {
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
        "http://api.giphy.com/v1/gifs/random?api_key=VktLrQTkPGO3xkA7IJxOgvvrJbkefodH"
      )
      .then(response => {
        console.log(response);
        console.log(response.data.data.images);
        this.setState({
          // imageurl: response.data.data
          imageurl: response.data.data.images.downsized_large.url
        });
      })
      .catch(function(error) {
        //Error Text
      });
  };

  render() {
    const images = this.state.imageurl;
    return (
      <div>
        <h2>Random gif</h2>
        <br></br>
        <img src={images} alt="" />
      </div>
    );
  }
}

export default Random;
