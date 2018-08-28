import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
  background:rgb(216,216,216);
`

const Menu = styled.div`
  width:100%;
  height:50px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  background:rgba(0,191,255,.09);
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
          <div>
            <Link to='/' style={{textDecoration:'none',color:'inherit'}}>
              Start a System Build
            </Link>
          </div>
          <div>View Build Guides</div>
          <div>See Completed Builds</div>
          <div>Search</div>
        </Menu>
      </Head>
    )
  }
}
