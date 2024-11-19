import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
// import Image from './Image';

export default class Class13 extends Component {
    constructor(){
        super();
        this.state = {
            apidata:[]
        }
        console.log('constructor 13');
    }

    // useEffect(()=>{},[])

    componentDidMount(){
        console.log("did mount 13", this.props.p1);
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                this.setState({
                    apidata:json
                })
            })
            // document.body.addEventListener('mousemove',this.xyz);
    }
  xyz(){
    console.log(Math.random());

  }

//   useEffect(()=>{},[catname])

componentDidUpdate(prevprops){
    console.log('did update 13', prevprops.p1, this.props.p1);
    if(this.props.p1!='' && prevprops.p1!=this.props.p1){
        fetch('https://fakestoreapi.com/products/category/'+this.props.p1)
        .then(res=>res.json())
        .then(json=>{
            console.log(json);
            this.setState({
                apidata:json
            })
        })
    }
}

// useEffect(()=>{
    // return()=>{}
        // },[])

componentWillUnmount(){
    console.log("will unmount 13");
    this.setState({
        apidata:[]
    })

}
  render() {
    console.log("render 13");
    const RECORD = this.state.apidata;
    return (
      <div className='row'>
        {
            RECORD && RECORD.map(({title,image})=>
              <div className='col-3 text-center'>
                  <Image src={image} fluid/>
                  <h6>{title}</h6>
              </div>
            )
        }
      </div>
    )
  }
}
