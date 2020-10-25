import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import galleryItems from '../GalleryItems/GalleryItems'

class App extends Component {
// setting state 
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
//this is like document.ready
//firing off our get request on page load
  componentDidMount(){
    this.getImages();
  }
//this is our get function 
//grabbing the data and storing it in app.js in gallery items
  getImages = () => {
    axios.get('/gallery')
    .then(response => {
      //response.data has our data (images, likes, ids)
      this.setState({
        galleryItems:response.data
      })
      }).catch(error => {
        alert('error in get')
      })
  }
    //When the like button is clicked, `Axios` is updating (`PUT`) the like count `/gallery/like/:id`.
  likeCount = (id) => {
    axios.put(`/gallery/like/${id}`)
    .then(response => {
      this.getImages();
     //catch fires an error if there is one 
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
          {/* working with put request to store number of likes */}
        {/*Makes this.props.galleryItems IN GalleryList component*/}
        <GalleryList galleryOfImages={this.state.galleryItems} likeCount={this.likeCount}/>
      </div>
    );
  }
}

export default App;
