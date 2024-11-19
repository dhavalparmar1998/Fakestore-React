import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    console.log(this.props.path);
    console.log('img');

    if(this.props.path == ""){
        throw new Error("Image Path Empty")
    }
    return (
      <div>
        <img src={this.props.path} className='img-fluid'/>
      </div>
    )
  }
}
