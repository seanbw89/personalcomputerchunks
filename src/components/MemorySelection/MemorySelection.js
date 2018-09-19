import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addMem} from '../../ducks/reducer'

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



class MemorySelection extends Component {
  constructor(){
    super()
    this.state = {
      memory:[]
    }
  }
  componentDidMount(){
    axios.get('/api/memory').then(res=>{
      this.setState({memory:res.data})
    })
  }
  addMem(e){
    this.props.addMem(e)
    this.props.history.push('/')
  }
  render() {
    return (
      <Wrapper>
         <div style={{width:'100%', background:'rgb(78,94,166)',height:'110px', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <h2 style={{color:'white', fontSize:'2rem', fontFamily:'Lato, sans-serif', marginLeft:'350px'}}>
            Choose Memory
          </h2>
        </div>
        <Table>
          <thead>
            <tr>
              <th>
                <Ptag>
                  Ram
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Speed
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Size
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Rating 
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Price
                </Ptag>
              </th>              
            </tr>
          </thead>
          <tbody>
            {
              this.state.memory.map(e=>{
                return(
                  <tr>
                    <td>
                      {e.model}
                    </td>
                    <td>
                      {e.speed}
                    </td>
                    <td>
                      {e.size}
                    </td>
                    <td>4 stars</td>
                    <td>00.00</td>
                    <td><button onClick={()=>this.addMem(e.product_id)}>Add</button></td>
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
  let {memory} = state
  return memory
}
export default withRouter(connect(mapState,{addMem})(MemorySelection))