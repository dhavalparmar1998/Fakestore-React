import React, { Component } from 'react'
import Child22 from './Child22';

export default class Parent21 extends Component {
    constructor(){
        super();
        this.state = {
            data:100
        }
    }
    myfunc(){
        this.setState({
            data:this.state.data+10
        });
    }
  render() {
    return (
      <div className='container'>
        <h1>Parent21 - Pure Component , {this.state.data}</h1>
        <button onClick={()=>{this.myfunc()}}>Change</button>
        <hr/>
        <Child22/>
      </div>
    )
  }
}
