import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {

  state = {
    galleryItems: [],
    newItem: {
      path: '',
      description: '',
      likes: 0
    }
  }

  componentDidMount = () => {
    console.log(this.state.galleryItems);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        {this.props.galleryItems.map((image) =>{
                return <GalleryList image={image}/>
             })}
        {/* <img src="images/goat_small.jpg"/> */}
        {/* <img src="1.png"/> */}
      </div>
    );
  }
}

export default App;
