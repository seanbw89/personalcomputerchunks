import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'

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
  background:rgba(202,202,202,0.9);
`

const Menu = styled.div`
  width:100%;
  height:50px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  background:rgba(0,191,255,0.3);
  padding-left:10px;  
`

const modalStyles = {
  content:{
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '200px',
    height                : '410px',
    background            : 'rgb(169,169,169)',
    borderRadius          : '10px',
    boxShadow             : '2px 2px 2px grey'
  }
}

export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      modal:false,
      email:'',
      passWord:''
    }
  }
  openModal(){
    this.setState({modal:true})
  }
  closeModal(){
    this.setState({modal:false})
  }
  handleInput(event){
    this.setState({[event.target.name]:[event.target.value]})
  }
  render() {
    return (
      <Head>
        <LogoLogin>
          <div>LOGO</div>
          <div><span onClick={()=>this.openModal()}>LOGIN</span></div>
          <Modal
          isOpen={this.state.modal}
          onRequestClose={()=>this.closeModal()}
          style={modalStyles}
          >
            <form action="" style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column', paddingTop:'10px'}}>
              <h1>Personal Computer Chunks</h1>
              <img src="" alt="Logo"/>
              <label htmlFor='email'>Email</label>
              <input name='email' type="email" placeholder='Email' onChange={(e)=> this.handleInput(e)}/>
              {this.state.email}
              <label htmlFor="password">Password</label>
              <input name='passWord' type="password" placeholder='Password' onChange={(e)=> this.handleInput(e)}/> 
              {this.state.passWord}
              <input type="checkbox"/> Remeber Me     
              <button style={{marginTop:'10px'}} onClick={()=>this.closeModal()}>Login</button>
              <p>Want to Join? Register Here.</p>
              <p>Forot Your password?</p>
            </form>
          </Modal>
        </LogoLogin>
        <Menu>
          <div>
            <Link to='/' style={{textDecoration:'none',color:'inherit'}}>
              Start a System Build
            </Link>
          </div>
          <div>View Build Guides</div>
          <div>See Completed Builds</div>          
        </Menu>
      </Head>
    )
  }
}
