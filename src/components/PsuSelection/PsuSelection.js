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
  addPsu(e){
    this.props.addPsu(e)
    this.props.history.push('/')
  }
  render() {
    return (
      <Wrapper>
        <div style={{width:'100%', background:'rgb(78,94,166)',height:'110px', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <h2 style={{color:'white', fontSize:'2rem', fontFamily:'Lato, sans-serif', marginLeft:'350px'}}>
            Choose A Power Supply
          </h2>
        </div>
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
                    <td><button onClick={()=>this.addPsu(e.product_id)}>Add</button></td>
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