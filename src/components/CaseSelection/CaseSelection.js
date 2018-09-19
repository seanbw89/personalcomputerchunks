import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addCase} from '../../ducks/reducer'

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


class CaseSelection extends Component {
  constructor(){
    super()
    this.state = {
      compcase:[]
    }
  }
  componentDidMount(){
    axios.get('/api/case').then(res=>{
      this.setState({compcase:res.data})
      console.log(this.state.compcase);
    })
  }
  addCase(e){
    this.props.addCase(e)
    this.props.history.push('/')
  }
  render() {
    return (
      <Wrapper>
        <div style={{width:'100%', background:'rgb(78,94,166)',height:'110px', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <h2 style={{color:'white', fontSize:'2rem', fontFamily:'Lato, sans-serif', marginLeft:'350px'}}>
            Choose A Case
          </h2>
        </div>
        <Table>
          <thead>
            <tr>
              <th>
                <Ptag>
                  Case
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Type
                </Ptag>
              </th>              
              <th>
                <Ptag>
                  Int. 3 &frac12;
                </Ptag>
              </th>
              <th>
                <Ptag>
                  PSU
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
              this.state.compcase.map(e=>{
                return(
                  <tr>
                    <td>
                      {e.model}
                    </td>
                    <td>
                      {e.form_type}
                    </td>
                    <td>
                      {e.intthreefive}
                    </td>
                    <td>
                      {e.psu}
                    </td>
                    <td>
                      4 stars
                    </td>
                    <td>
                      {e.price}
                    </td>
                    <td><button onClick={()=>this.addCase(e.product_id)}>Add</button></td>
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
  let {ccase} = state
  return{
    ccase
  }
}
export default withRouter(connect(mapState, {addCase})(CaseSelection))