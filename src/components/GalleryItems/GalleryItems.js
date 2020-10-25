import React, { Component } from 'react';

class GalleryItems extends Component {
    // setting state to showAlias
    state = {
        showAlias: true
    }

    //defining aliasUpdate
    aliasUpdate = () => {
        console.log('clicked', this.state.showAlias);
        
        this.setState({
            showAlias: !this.state.showAlias
        })
    }
    render(){
        //defining image, this will allow for dryer code
            const image = this.props.image
        return(
            <>
            {/* when the image is clicked the image will switch to a description and back  */}
             <div className="imageWrapper" onClick={this.aliasUpdate}>
                {/* conditional render using ternary operator*/}
                {this.state.showAlias ?
                    <img src={image.path}/> 
                :
                    <p>{image.description}</p>
                }
            </div>
            {/* this is where we are adding our likes */}
            {/* on click we are firing of a function and triggering our like count to fire off */}
            <button onClick={() => this.props.likeCount(image.id)}>Like</button>
            {/* this displays how many likes an image has */}
            <p>{image.likes} : Total Likes</p>
            </>
        )
    }
}

export default GalleryItems;