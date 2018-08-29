import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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


export default class CaseSelection extends Component {
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
  render() {
    return (
      <Wrapper>
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
