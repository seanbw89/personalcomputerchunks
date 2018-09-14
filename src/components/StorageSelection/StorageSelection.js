import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addStor} from '../../ducks/reducer'

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



class StorageSelection extends Component {
  constructor(){
    super()
    this.state = {
      stor:[]
    }
  }
  componentDidMount(){
    axios.get('/api/storage').then(res=>{
      this.setState({stor:res.data})
    })
  }
  addStor(e){
    this.props.addStor(e)
    this.props.history.push('/')
  }
  render() {
    return (
      <Wrapper>
        <Table>
          <thead>
            <tr>
              <th>
                <Ptag>
                  Storage
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Form 
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Capacity
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
              this.state.stor.map(e=>{
                return(
                  <tr>
                    <td>
                      {e.model}
                    </td>
                    <td>
                      {e.form_factor}
                    </td>
                    <td>
                      {e.capicity}
                    </td>
                    <td>
                      4 Stars
                    </td>
                    <td>
                      0.00
                    </td>
                    <td><button onClick={()=>this.addStor(e.product_id)}>Add</button></td>
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
  let {stor} = state
  return {
    stor
  }
}
export default withRouter(connect(mapState, {addStor})(StorageSelection))