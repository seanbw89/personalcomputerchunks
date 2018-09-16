import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addSession} from '../ducks/reducer'

const Head = styled.header`
  width:100%;
  height:140px;
  background:rgba(192,192,192,.2);
`
const LogoLogin = styled.div`
  width:100%;
  height:80px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  background:rgba(170,109,0,.4);
  -webkit-box-shadow: inset -2px -10px 31px -10px rgba(0,0,0,0.88);
  -moz-box-shadow: inset -2px -10px 31px -10px rgba(0,0,0,0.88);
  box-shadow: inset -2px -10px 31px -10px rgba(0,0,0,0.88);
`
const Menu = styled.div`
  width:100%;
  height:60px;
  background:rgba(30,114,255,.2);  
`
const InnerMenu = styled.div`
  width:61%;
  height:60px;  
  margin:0 auto;
  display:flex;
  justify-content:flex-start;  
`
const MenuItem = styled.div`
  height:60px;
  width:200px;    
  display:flex;
  align-items:center;
  justify-content:space-evenly;  
  :hover{
    background:rgba(30,144,255,.5);    
  }
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
    background            : 'linear-gradient(rgb(176,224,230), rgb(70,130,180))',
    borderRadius          : '4px',
    boxShadow             : '7px 7px 5px 0px rgba(0,0,0,0.34)',
    border                : '.5px solid rgba(0,0,0,.4)'
  }
}

const linkStyle = {
  textDecoration:'none', 
  color:'inherit', 
  fontFamily:'Lato, sans-serif',
  cursor:'context-menu'
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
          <Link to='/' style={linkStyle}>
            <div><h1 style={{fontSize:'2rem',fontFamily:'Lato,sans-serif'}}>Personal Computer <br/> Chunks</h1></div>
          </Link>
          {
            this.props.session.user_id 
            ? (
              <div >
                <span style={{fontFamily:'Lato, sans-serif'}}>
                  Welcome &nbsp;
                {
                  this.props.session.user_name
                }
                &nbsp;
                </span>                
                &nbsp;
                | &nbsp;
              <span><Link style={linkStyle} to='/savedlist'> Saved Lists</Link> | &nbsp;</span> <span style={linkStyle} onClick={()=> this.logOut()}>Log Out</span>
              </div>
            ) 
            : 
            (
              <div>
                <span onClick={()=>this.openModal()} style={linkStyle}>                  
                  Log In
                </span> | 
                <span onClick={()=>this.openRegModal()} style={linkStyle}>
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
              <h1 style={{marginBottom:'40px',fontSize:'1.3rem', fontWeight:'bold',textAlign:'center', marginTop:'20px'}}>Personal <br/> Computer Chunks</h1>                
                  <label htmlFor='email' style={{marginBottom:'10px'}}>Email</label>
                    <input name='email' type="email" placeholder='Email' onChange={(e)=> this.handleInput(e)}/>              
                  <label htmlFor="password" style={{marginBottom:'10px',marginTop:'10px'}}>Password</label>
                    <input name='passWord' type="password" placeholder='Password' onChange={(e)=> this.handleInput(e)}/>               
                    <button style={{marginTop:'20px', marginBottom:'20px', borderRadius:'2px', padding:'5px',background:'rgba(176,224,230,.9)'}} onClick={(e)=>e.preventDefault(this.logIn())}>Login</button>
              <p>Want to Join? &nbsp; <br/>
                <span onClick={()=>this.openRegModal()}>                  
                    Register Here.                  
                </span> 
              </p>
            </form>
          </Modal>
          <Modal
          isOpen={this.state.registerModal}
          onRequestClose={()=>this.closeRegModal()}
          style={modalStyles}
          >
          <form style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column', paddingTop:'10px'}}>
          <h1 style={{marginBottom:'10px',fontSize:'1.3rem', fontWeight:'bold',textAlign:'center', marginTop:'20px'}}>Personal <br/> Computer Chunks</h1>
            <label style={{marginBottom:'10px'}} htmlFor="Username">Username</label>
            <input type="text" placeholder='User Name' name='regUsername'onChange={(e)=> this.handleInput(e)}/>
            <label style={{marginBottom:'10px',marginTop:'10px'}} htmlFor="Username">Email</label>
            <input type="email" placeholder='Email' name='regEmail' onChange={(e)=> this.handleInput(e)}/>
            <label style={{marginBottom:'10px',marginTop:'10px'}} htmlFor="Username">Password</label>
            <input type="password" placeholder='Password' name='regPass' onChange={(e)=> this.handleInput(e)}/>
            <label style={{marginBottom:'10px',marginTop:'10px'}} htmlFor="Username">Confirm Password</label>
            <input style={{marginBottom:'10px',marginTop:'10px'}} type="password" placeholder='Confirm Password' name='regConPass' onChange={(e)=> this.handleInput(e)}/>
            <button style={{marginTop:'20px', marginBottom:'20px', borderRadius:'2px', padding:'5px',background:'rgba(176,224,230,.9)'}} onClick={(e)=>e.preventDefault(this.register()) }>Register</button>            
          </form>
          </Modal>
        </LogoLogin>
          <Menu>
            <InnerMenu>
              <Link to='/' style={linkStyle}>
                <MenuItem>                  
                {
                  this.props.cpu ||
                  this.props.cooler || 
                  this.props.motherboard ||
                  this.props.video ||
                  this.props.memory ||
                  this.props.ccase ||
                  this.props.stor ||
                  this.props.psu ? 
                  <p>View Build</p> : <p>Start A System Build</p>}
                </MenuItem>
              </Link>
              <Link to='/buildguides' style={linkStyle}>
                <MenuItem>                  
                    Build Guides                  
                </MenuItem>
              </Link>
              <Link to='/completedbuilds' style={linkStyle}>
                <MenuItem>                
                  Completed Builds              
                </MenuItem>
              </Link>
            </InnerMenu>
          </Menu>
      </Head>
    )
  }
}
function mapState(state){
  let {
    cpu,
    cooler,
    ccase,
    motherboard,
    memory,
    stor,
    video,
    psu,
    session
  } = state
  return {
    cpu,
    cooler,
    ccase,
    motherboard,
    memory,
    stor,
    video,
    psu,
    session
  }
}
export default withRouter(connect(mapState, {addSession})(Header))