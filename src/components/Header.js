import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'
import axios from 'axios'

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
    boxShadow             : '0px 5px 3px 2px rgba(0,0,0,0.5)'
  }
}

export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      loginModal:false,
      registerModal:false,
      email:'',
      passWord:'',
      regUsername:'',
      regEmail:'',
      regPass:'',
      regConPass:'',
      user:{}
    }
  }
  openModal(){
    this.setState({loginModal:true})
  }
  closeModal(){
    this.setState({loginModal:false})
  }
  openRegModal(){
    this.closeModal()
    this.setState({registerModal:true})
  }
  closeRegModal(){
    this.setState({registerModal:false})
  }
  handleInput(event){
    this.setState({[event.target.name]:[event.target.value]})
  }
  register(){
    let {regUsername, regEmail, regPass} = this.state
    axios.post('/api/register', {regUsername, regEmail, regPass}).then(res=>{
      this.setState({user:res.data})
    })
    this.closeRegModal()
  }
  render() {
    console.log(this.state);
    return (
      <Head>
        <LogoLogin>
          <div>LOGO</div>
          <div><span onClick={()=>this.openModal()}>Log In</span> | <span onClick={()=>this.openRegModal()}> Register</span> </div>
          <Modal
          isOpen={this.state.loginModal}
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
              <p>Want to Join? 
                <span onClick={()=>this.openRegModal()}>                  
                    Register Here.                  
                </span> 
              </p>
              <p>Forot Your password?</p>
            </form>
          </Modal>
          <Modal
          isOpen={this.state.registerModal}
          onRequestClose={()=>this.closeRegModal()}
          style={modalStyles}
          >
          <form action=""  style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column', paddingTop:'10px'}}>
            <label htmlFor="Username">Username</label>
            <input type="text" placeholder='User Name' name='regUsername'onChange={(e)=> this.handleInput(e)}/>
            <label htmlFor="Username">Email</label>
            <input type="email" placeholder='Email' name='regEmail' onChange={(e)=> this.handleInput(e)}/>
            <label htmlFor="Username">Password</label>
            <input type="password" placeholder='Password' name='regPass' onChange={(e)=> this.handleInput(e)}/>
            <label htmlFor="Username">Confirm Password</label>
            <input type="password" placeholder='Confirm Password' name='regConPass' onChange={(e)=> this.handleInput(e)}/>
            <button onClick={()=>this.register()}>Register</button>
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
