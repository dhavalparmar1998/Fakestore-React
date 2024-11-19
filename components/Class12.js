import React, { Component } from 'react'
import Class13 from './Class13'

export default class Class12 extends Component {
    constructor(){
        super();
        this.state = {
            catname:""
        }
        this.x1 = React.createRef();
    }

    myfunc(){
        console.log(this.x1.current.value);
        this.setState({
            catname:this.x1.current.value
        })
    }
  render() {
    return (
      <div className='container'>
        <h1>Class12 - Cycle</h1>
        <input type='text' ref={this.x1}/>
        <button onClick={()=>{this.myfunc()}}>Search</button>
        {this.state.catname}
        <hr/>
        <Class13 p1={this.state.catname}/>
      </div>
    )
  }
}
