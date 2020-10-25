import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    console.log(this.props.galleryItems);
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
                return <HeroDisplay image={image}/>
             })}
        {/* <img src="images/goat_small.jpg"/> */}
        {/* <img src="1.png"/> */}
      </div>
    );
  }
}

export default App;
