import React, { Component } from 'react'

export default class Sona extends Component {
  state={
    sun:"向父组件通信",
    fraternal:"你好，兄弟"
  }
  Parentdata=()=>{
    const {sun}=this.state
    this.props.putdata(sun)
  }
  componentDidMount=()=>{
    const {fraternal}=this.state
    this.props.fraternalData(fraternal)
  }
  render() {
    const {num}=this.props
    return (
      <div>
        <h1>我是A子组件:{num}</h1>
        <button onClick={this.Parentdata}>向父组件通信</button>
      </div>
    )
  }
}
