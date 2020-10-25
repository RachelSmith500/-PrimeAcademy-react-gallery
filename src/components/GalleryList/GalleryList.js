import React, { Component } from 'react';
import GalleryItems from '../GalleryItems/GalleryItems'

class GalleryList extends Component {
    render(){
        return(
            <>
            {/* looping over images and counting likes */}
            {/* using defined function from our app file */}
              {this.props.galleryOfImages.map((image) => { 
                    return (
                        <GalleryItems key={image.id} image={image} likeCount={this.props.likeCount}/>
                    )
                })}
            </>
        )
    }
  
}

export default GalleryList;