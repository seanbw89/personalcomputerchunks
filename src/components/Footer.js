import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div style={{textAlign:'center', paddingTop:'10px', background:'rgba(192,192,192,.2)'}}>
        <div style={{paddingBottom:'20px'}}>
          &copy; 2018 Personal Compter Chunks <br/> Sean B. White
        </div>
      </div>
    )
  }
}
