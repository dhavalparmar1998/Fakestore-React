import React, { Component, PureComponent } from 'react'

export default class Child22 extends PureComponent {
  render() {
    console.log("child comp called pure comp", Math.random());
    return (
      <div></div>
    )
  }
}
