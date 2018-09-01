import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addSession} from '../ducks/reducer'

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

class Header extends Component {
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
  componentWillMount(){
    Modal.setAppElement('body')
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
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]:value})
  }
  register(){
    let {regUsername, regEmail, regPass} = this.state
    axios.post('/api/register', {regUsername, regEmail, regPass}).then(res=>{
      this.props.addSession(res.data)
    })
    this.closeRegModal()
  }
  logOut(){
    axios.get('/api/logout').then(res=>{
      this.props.addSession(res.data)
    })
  }
  logIn(){
    let {email,passWord} = this.state
    axios.post('/api/login',{email,passWord}).then(res=>{
      this.props.addSession(res.data)
    })
    this.closeModal()
  }
  render() {
    return (
      <Head>
        <LogoLogin>
          <div>LOGO</div>
          {
            this.props.session.user_id 
            ? (
              <div>
                {
                  this.props.session.user_name
                }
                <span onClick={()=> this.logOut()}>Log Out</span>
              </div>
            ) 
            : (
              <div>
                <span onClick={()=>this.openModal()}>
                  Log In
                </span> | 
                <span onClick={()=>this.openRegModal()}>
                  &nbsp;Register
                </span> 
              </div>
            )                        
          }
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
              <button style={{marginTop:'10px'}} onClick={(e)=>e.preventDefault(this.logIn())}>Login</button>
              <p>Want to Join? &nbsp;
                <span onClick={()=>this.openRegModal()}>                  
                    Register Here.                  
                </span> 
              </p>
              <p>Forgot Your password?</p>
            </form>
          </Modal>
          <Modal
          isOpen={this.state.registerModal}
          onRequestClose={()=>this.closeRegModal()}
          style={modalStyles}
          >
          <form style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column', paddingTop:'10px'}}>
            <label htmlFor="Username">Username</label>
            <input type="text" placeholder='User Name' name='regUsername'onChange={(e)=> this.handleInput(e)}/>
            <label htmlFor="Username">Email</label>
            <input type="email" placeholder='Email' name='regEmail' onChange={(e)=> this.handleInput(e)}/>
            <label htmlFor="Username">Password</label>
            <input type="password" placeholder='Password' name='regPass' onChange={(e)=> this.handleInput(e)}/>
            <label htmlFor="Username">Confirm Password</label>
            <input type="password" placeholder='Confirm Password' name='regConPass' onChange={(e)=> this.handleInput(e)}/>
            <button onClick={(e)=>e.preventDefault(this.register()) }>Register</button>            
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
function mapState(state){
  let {session} = state
  return {
    session
  }
}
export default withRouter(connect(mapState, {addSession})(Header))