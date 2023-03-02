import React, { Component } from 'react'

export default class Sonb extends Component {
  render() {
    const {frater}=this.props
    return (
      <div>
        
        <h1>我是B子组件:Sona传信息给我=={frater}</h1>
      </div>
    )
  }
}
