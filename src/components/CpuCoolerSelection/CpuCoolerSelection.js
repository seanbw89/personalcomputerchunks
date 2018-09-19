import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addCooler} from '../../ducks/reducer'

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


class CpuCoolerSelection extends Component {
  constructor(){
    super()
    this.state = {
      cooler:[]
    }
  }
  componentDidMount(){
    axios.get('/api/cooler').then(res=>{
      this.setState({cooler:res.data})
    })
  }
  addCooler(e){
    this.props.addCooler(e)
    this.props.history.push('/')
  }
  render() {
    return (
      <Wrapper>
        <div style={{width:'100%', background:'rgb(78,94,166)',height:'110px', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <h2 style={{color:'white', fontSize:'2rem', fontFamily:'Lato, sans-serif', marginLeft:'350px'}}>
            Choose A Cpu Cooler
          </h2>
        </div>
        <Table>
          <thead>
            <tr>
              <th>
                <Ptag>
                  Cpu Cooler
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Liquid
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Height
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
              this.state.cooler.map(e=>{
                return(
                  <tr>
                    <td>
                      {e.model}
                    </td>
                    <td>
                      {e.liquid}
                    </td>
                    <td>
                      {e.c_height !== null ? e.c_height : 'N/A'}
                    </td>
                    <td><button onClick={()=>this.addCooler(e.product_id)}>Add</button></td>
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
  let {cooler} = state
  return {
    cooler
  }
}
export default withRouter(connect(mapState, {addCooler})(CpuCoolerSelection))