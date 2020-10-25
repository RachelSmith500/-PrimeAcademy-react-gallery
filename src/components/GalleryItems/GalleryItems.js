import React, { Component } from 'react';

class GalleryItems extends Component {
    state = {
        showAlias: false
    }

    aliasUpdate = () => {
        console.log('clicked', this.state.showAlias);
        
        this.setState({
            showAlias: !this.state.showAlias
        })
    }
    render(){
            const image = this.props.image
            console.log(image)
        return(
            <>
             <div className="imageWrapper" onClick={this.aliasUpdate}>
                {/* conditional render using ternary operator*/}
                {this.state.showAlias ?
                    <img src={image.path}/> 
                :
                    <p>{image.description}</p>
                }
            </div>
            <button onClick={() => this.props.likeCount(image.id)}>Like</button>
            <p>{image.likes} : Total Likes</p>
            </>
        )
    }
}

export default GalleryItems;