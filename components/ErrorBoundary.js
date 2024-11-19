import React, { Component } from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {hasError: false}
    }
    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

  render() {
   if(this.state.hasError){
    return <img src="https://cdn1.iconfinder.com/data/icons/neutro-interface/32/error-512.png" className='img-fluid' />
   }
   return this.props.children
  }
}
