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

export default class Class7 extends Component {
    constructor(){
        super();
        console.log("constructor called");

        this.state = {
            apidata:[],
           
        }
        this.x1 = React.createRef();
    }

    componentDidMount(){
        console.log("did mount");
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                this.setState({apidata:json})
            })
    }

    myfunc(){
        console.log(this.x1.current.value);
        var apipath = `https://fakestoreapi.com/products/category/${this.x1.current.value}`;
        console.log(apipath);
        fetch(apipath)
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

 
  render() {
    console.log("Render called", Math.random());
    const record = this.state.apidata;
    return (
      <div className='container'>
        <h1>Api Data</h1>
        <hr/>

      <input type='text' ref={this.x1}/>
      <button onClick={()=>{this.myfunc()}}>Enter</button>
      <hr/>
      <div className='row'>
        {
            record && record.map(val=>
                <div className='col-3'>
                    <img src={val.image} className='img-fluid'/>
                    <h2>${val.price}</h2>
                </div>
            )
        }
      </div>
      </div>
    )
  }
}
