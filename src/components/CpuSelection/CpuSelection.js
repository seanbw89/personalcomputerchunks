import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addCpu} from '../../ducks/reducer'

const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:space-around;
`
const Table = styled.table`
  width:80%;  
`
const Ptag = styled.p`
  width:100%;
  display:flex;
  justify-content:flex-start;
  padding-top:10px;
  font-weight:bold;
  margin-bottom:20px;
`



class CpuSelection extends Component {
  constructor(){
    super()
    this.state={
      cpu:[]
    }
  }
  componentDidMount(){
    axios.get('/api/cpu').then(res=>{
      this.setState({cpu:res.data})
    })
  }
  render() {
    return (
      <Wrapper>
        <Table>
          <thead>
            <tr>
              <th>
                <Ptag>Cpu</Ptag>  
              </th>
              <th>
                <Ptag>Frenquency</Ptag>  
              </th>
              <th>
                <Ptag>TDP</Ptag>  
              </th>
              <th>
                <Ptag>Rating</Ptag>  
              </th>
              <th>
                <Ptag>Price</Ptag>  
              </th>
              <th><span>&nbsp;&nbsp;</span></th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.cpu.map(e=>{
              return(
                  <tr  style={{padding:'20px'}}>
                    <td>
                    {e.model}  
                    </td>
                    <td>
                    {e.frenquency} Ghz  
                    </td>
                    <td>
                    {e.tdp} W  
                    </td>
                    <td>
                    4 Stars  
                    </td>
                    <td>
                    {e.price}  
                    </td>
                    <td><button onClick={()=> this.props.addCpu(e.product_id)}>Add</button></td>
                  </tr>
              )
            })
          }
          </tbody>
        </Table>        
      </Wrapper>
    )
  }
}
function mapState(state){
  let {cpu} = state;
  return {
    cpu
  }
}
export default withRouter(connect(mapState, {addCpu})(CpuSelection))