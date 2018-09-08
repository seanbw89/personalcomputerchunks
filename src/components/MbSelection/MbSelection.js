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
  render() {
    return (
      <Wrapper>
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
                    <td><button onClick={()=>this.props.addMb(e.product_id)}>Add</button></td>
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