import React from 'react';
import axios from 'axios';


class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props, imageurl: [] }; //Tag for search
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.search = this.search.bind(this);
    }

    //For when input is being placed
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    //For when search field is empty 
    handleSubmit(event) {
        event.preventDefault();
    }

    search = () => {
        console.log(this.state)
        axios.get('http://api.giphy.com/v1/gifs/random?api_key=VktLrQTkPGO3xkA7IJxOgvvrJbkefodH')
            .then((response) => {
                console.log(response)
                console.log(response.data.data.images)
                this.setState({
                    // imageurl: response.data.data
                    imageurl: response.data.data.images.downsized_large.url
                });
            })
            .catch(function (error) {
                //Error Text
            })
    }

    render() {
        console.log(this.state)
        //const images = this.state.imageurl.map( (i) =><Results i={i}/> )
        const images = this.state.imageurl
        return (
            <div>
                <h2>Random gif</h2>
                <input type="submit" onClick={this.search}></input>
                <br></br>
                <img src={images} alt=""/>
            </div>
        )
    }
}

export default Random;