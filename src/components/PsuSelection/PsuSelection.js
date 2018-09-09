import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addPsu} from '../../ducks/reducer'

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

class PsuSelection extends Component {
  constructor(){
    super()
    this.state = {
      psu:[]
    }
  }
  componentDidMount(){
    axios.get('/api/powersupply').then(res=>{
      this.setState({psu:res.data})
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
                  Power Supply
                </Ptag>              
              </th>
              <th>
                <Ptag>
                  Wattage
                </Ptag>              
              </th>
              <th>
                <Ptag>
                  Modular
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
              this.state.psu.map(e=>{
                return(
                  <tr>
                    <td>
                      {`${e.manufacturer} ${e.model}`}
                    </td>
                    <td>
                      {e.wattage}
                    </td>
                    <td>
                      {e.modular}
                    </td>
                    <td>
                      Rating
                    </td>
                    <td>
                      Price
                    </td>
                    <td><button onClick={()=>this.props.addPsu(e.product_id)}>Add</button></td>
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
  let {psu} = state
  return { 
    psu
  }
}
export default withRouter(connect(mapState, {addPsu})(PsuSelection))