import React, { Component } from 'react'
import Sona from './component/Sona'
import Sonb from './component/Sonb'

export default class App extends Component {
  state={
    num:"你好",
    user:'',
    frater:''
  }
  //Sona组传递的参数
  putdata=(user)=>{
    this.setState({
      user
    })
  }
  //Sona组传递的参数，接收又传给子组件
  fraternalData=(f)=>{
    this.setState({
      frater:f
    })
  }
  render() {
    const {num,frater,user}=this.state
    console.log("==========",this.putdata)
    return (
      <div>
        <h1>Sona子组件传过来的数据:{user}</h1>
        <Sona num={num} putdata={this.putdata} fraternalData={this.fraternalData}/>
        <Sonb frater={frater}/>
      </div>
    )
  }
}
