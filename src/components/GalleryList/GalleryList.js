import React, { Component } from 'react';

class GalleryList extends Component {
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
        return(
            <>
             <div className="heroWrapper">
                <h3>{this.props.image.path}</h3>
                {/* conditional render using ternary operator*/}
                {this.props.image.description ?
                    <p>is on duty</p>
                :
                    <p>is not on duty</p>
                }
                <br/>
                <button onClick={this.aliasUpdate}>show alias</button>
   
            </div>
            </>
        )
    }
}

export default GalleryList;