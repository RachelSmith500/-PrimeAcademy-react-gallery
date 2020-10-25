import React, { Component } from 'react';
import GalleryItems from '../GalleryItems/GalleryItems'

class GalleryList extends Component {
    render(){
        return(
            <>
              {this.props.galleryOfImages.map((image) => { 
                    return (
                        <GalleryItems key={image.id} image={image} />
                    )
                })}
            </>
        )
    }
  
}

export default GalleryList;