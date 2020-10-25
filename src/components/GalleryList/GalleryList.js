import React, { Component } from 'react';
import GalleryItems from '../GalleryItems/GalleryItems'

class GalleryList extends Component {
    render(){
        console.log(this.props.galleryOfImages)
        return(
            <>
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