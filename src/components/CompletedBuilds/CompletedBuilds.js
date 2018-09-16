import React, { Component } from 'react'
import axios from 'axios'
export default class CompletedBuilds extends Component {
  constructor(){
    super()
    this.state = {
      userLists:[]
    }
  }
  componentDidMount(){
    axios.get('/api/alllists').then(res=>{
      this.setState({userLists:res.data})
    })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        
      </div>
    )
  }
}
