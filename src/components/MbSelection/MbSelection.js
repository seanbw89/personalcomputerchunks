import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addMb} from '../../ducks/reducer'


const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:space-evenly;
  flex-direction:column;
  align-items:center;
`
const Table = styled.table`
  width:80%;  
  height:80vh;
  margin-top:70px;   
`
const Ptag = styled.p`
  width:100%;
  display:flex;
  justify-content:flex-start;
  padding-top:10px;
  font-weight:bold;
  margin-bottom:20px;
`

class MbSelection extends Component {
  constructor(){
    super()
    this.state = {
      mb:[]
    }
  }
  componentDidMount(){
    axios.get('/api/motherboard').then(res=>{
      this.setState({mb:res.data})
    })
  }
  addMb(e){
    this.props.addMb(e)
    this.props.history.push('/')
  }
  render() {
    return (
      <Wrapper>
        <div style={{width:'100%', background:'rgb(78,94,166)',height:'110px', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <h2 style={{color:'white', fontSize:'2rem', fontFamily:'Lato, sans-serif', marginLeft:'350px'}}>
            Choose A Motherboard
          </h2>
        </div>
        <Table>
          <thead>
            <tr>
              <th>
                <Ptag>
                  Motherboard
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Socket
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Memory slots
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Max Memory
                </Ptag>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.mb.map(e=>{
                return(
                  <tr>
                    <td>
                      {e.model}
                    </td>
                    <td>
                      {e.cpu_socket}
                    </td>
                    <td>
                      {e.mem_slot}
                    </td>
                    <td>
                      {e.max_mem}
                    </td>
                    <td><button onClick={()=>this.addMb(e.product_id)}>Add</button></td>
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
  let {motherboard} = state
  return {
    motherboard
  }
}
export default withRouter(connect(mapState, {addMb})(MbSelection))