import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
`

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
      <Wrapper>
        <div style={{width:'100%', background:'rgb(247,124,12)',height:'110px', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <h2 style={{color:'white', fontSize:'2rem', fontFamily:'Lato, sans-serif', marginLeft:'350px'}}>
            Completed Builds
          </h2>
        </div>        
      </Wrapper>
    )
  }
}
