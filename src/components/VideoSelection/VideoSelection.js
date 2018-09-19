import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addVideo} from '../../ducks/reducer'

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

class VideoSelection extends Component {
  constructor(){
    super()
    this.state = {
      video:[]
    }
  }
  componentDidMount(){
    axios.get('/api/videocard').then(res=>{
      this.setState({video:res.data})      
    })
  }
  addVideo(e){
    this.props.addVideo(e)
    this.props.history.push('/')
  }
  render() {
    return (
      <Wrapper>
        <div style={{width:'100%', background:'rgb(78,94,166)',height:'110px', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <h2 style={{color:'white', fontSize:'2rem', fontFamily:'Lato, sans-serif', marginLeft:'350px'}}>
            Choose a Video Card
          </h2>
        </div>
        <Table>
          <thead>
            <tr>
              <th>
                <Ptag>
                  Video Card
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Memory
                </Ptag>
              </th>
              <th>
                <Ptag>
                  Core Clock
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
              this.state.video.map(e=>{
                return(
                  <tr>
                    <td>
                      {e.model}
                    </td>
                    <td>
                      {e.mem_size}
                    </td>
                    <td>
                      {e.core_clock}
                    </td>
                    <td>
                      4.0
                    </td>
                    <td>
                      0.00
                    </td>
                    <td><button onClick={()=>this.addVideo(e.product_id)}>Add</button></td>
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
  let {video} = state
  return {
    video
  }
}
export default withRouter(connect(mapState, {addVideo})(VideoSelection))