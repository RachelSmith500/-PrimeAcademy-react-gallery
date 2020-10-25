import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import galleryItems from '../GalleryItems/GalleryItems'

class App extends Component {

  state = {
    galleryItems: [
    {
      id:'',
      path: '',
      description: '',
      likes: 0
    }
  ]
  }

  componentDidMount(){
    this.getImages();
  }

  getImages = () => {
    axios.get('/gallery')
    .then(response => {
      this.setState({
        galleryItems:response.data
      })
      }).catch(error => {
        alert('error in get')
      })
  }
  likeCount = (id) => {
    axios.put(`/gallery/like/${id}`)
    .then(response => {
      this.getImages();
     
      }).catch(error => {
        alert('error in PUT')
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList galleryOfImages={this.state.galleryList}/>
    
        {/* <img src="images/goat_small.jpg"/> */}
        {/* <img src="1.png"/> */}
      </div>
    );
  }
}

export default App;
