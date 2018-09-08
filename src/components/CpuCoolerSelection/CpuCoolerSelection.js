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
  render() {
    return (
      <Wrapper>
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
                    <td><button onClick={()=>this.props.addCooler(e.product_id)}>Add</button></td>
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