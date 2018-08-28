import React, { Component } from 'react'
import styled from 'styled-components'

const Head = styled.div`
  width:100%;
  height:150px;  
`
const LogoLogin = styled.div`
  width:100%;
  height:80px;
  display:flex;
  justify-content:space-around;
  align-items:center;
`

const Menu = styled.div`
  width:100%;
  height:90px;
  display:flex;
  justify-content:space-around;
  align-items:center;
`

export default class Header extends Component {
  render() {
    return (
      <Head>
        <LogoLogin>
          <div>LOGO</div>
          <div>LOGIN</div>
        </LogoLogin>
        <Menu>
          <div>Start a System Build</div>
          <div>View Build Guides</div>
          <div>See Completed Builds</div>
          <div>Search</div>
        </Menu>
      </Head>
    )
  }
}
