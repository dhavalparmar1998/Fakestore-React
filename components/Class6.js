import React, { Component } from 'react'

/*
useEffect(()=>{})
useEffect(()=>{},[]) ... didmount 
useEffect(()=>{},[counter])...did update
useEffect(()=>{},[counter,name]) ...dis update
useEffect(()=>{
    return()=>{

        }},[])... will unmount
*/ 

export default class Class6 extends Component {
    constructor(){
        super();
        console.log("constructor called");

        this.state = {
            apidata:[],
            counter:0
        }
    }

    componentDidMount(){
        console.log("did mount");
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                this.setState({apidata:json})
            })
    }

    componentDidUpdate(){
        console.log("did update");
    }
    componentWillUnmount(){
        console.log("will unmount");
        this.setState({
            apidata:[]
        })
    }

    myfunc(){
        this.setState({
            counter : this.state.counter + 10
        })
    }
  render() {
    console.log("Render called", Math.random());
    const record = this.state.apidata;
    return (
      <div className='container'>Class6 , {this.state.counter}
      <button onClick={()=>{this.myfunc()}}>Enter</button>
      <hr/>
      <div className='row'>
        {
            record && record.map(val=>
                <div className='col-3'>
                    <img src={val.image} className='img-fluid'/>
                    <h2>{val.price}</h2>
                </div>
            )
        }
      </div>
      </div>
    )
  }
}
