import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
`
const Table = styled.table`
  width:80%;
  height:100vh;
`
const Ptag = styled.p`
  width:100%;
  display:flex;
  justify-content:flex-start;
  padding-top:10px;
  padding-bottom:40px;
  font-weight:bold;
`


export default class ColumnList extends Component {
  render() {
    return (           
      <Wrapper>
        <Table>
          <thead>
            <tr>
              <th><Ptag>Component</Ptag></th>
              <th><Ptag>Selection</Ptag></th>
              <th><Ptag>Price</Ptag></th>
              <th><Ptag>Tax</Ptag></th>              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CPU</td>              
                <td>
                  <Link style={{textDecoration:'none', color:'inherit'}} to='/cpu'>
                    Choose a CPU
                  </Link>  
                </td>            
            </tr>
            <tr>
              <td>CPU Cooler</td>
                <td>
                  <Link style={{textDecoration:'none', color:'inherit'}} to='/cpucooler'>
                    Choose a Cpu Cooler
                  </Link>
                </td>  
            </tr>
            <tr>              
              <td>Motherboard</td>
                <td>
                  <Link style={{textDecoration:'none', color:'inherit'}} to='/mb'>
                    Choose a MB
                  </Link>
                </td>
            </tr>
            <tr>              
              <td>Memory</td>
                <td>
                  <Link style={{textDecoration:'none', color:'inherit'}} to='/memory'>
                    Choose Memory
                  </Link>
                </td>
            </tr>
            <tr>              
              <td>Storage</td>
                <td>
                  <Link style={{textDecoration:'none', color:'inherit'}} to='/storage'>
                    Choose Storage
                  </Link>
                </td>
            </tr>
            <tr>              
              <td>Video Card</td>
                <td>
                  <Link style={{textDecoration:'none', color:'inherit'}} to='/video'>
                    Choose Video Card
                  </Link>
                </td>
            </tr>
            <tr>              
              <td>Case</td>
                <td>
                  <Link style={{textDecoration:'none', color:'inherit'}} to='/case'>
                    Choose A Case
                  </Link>
                </td>
            </tr>
            <tr>              
              <td>Power Supply</td>
                <td>
                  <Link style={{textDecoration:'none', color:'inherit'}} to='/psu'>
                    Choose A PSU
                  </Link>
                </td>
            </tr>
          </tbody>
        </Table>        
      </Wrapper>
    )
  }
}
