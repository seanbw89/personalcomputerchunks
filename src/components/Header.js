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

const Hover = styled.div`
  width:inherit;
  height:inherit;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  flex-direction:row;
  border-right:1px solid white;
  border-left:1px solid white;
  :hover{
    background:rgba(70,130,180,0.8);
  }
  
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
  height:50px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  background:rgba(255,155,0,.4);
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
  color:'inherit'
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
            <div><h1 style={{fontSize:'2rem'}}>Personal Computer <br/> Chunks</h1></div>
          </Link>
          {
            this.props.session.user_id 
            ? (
              <div>
                Welcome &nbsp;
                {
                  this.props.session.user_name
                }
                &nbsp;| &nbsp;
              <span><Link style={linkStyle} to='/savedlist'>Saved Lists</Link> | &nbsp;</span> <span onClick={()=> this.logOut()}>Log Out</span>
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
            <Hover>
              <Link to='/' style={linkStyle}>
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
              </Link>
            </Hover>
            <Hover>
              <Link to='/buildguides'  style={linkStyle}>
                View Build Guides
              </Link>
            </Hover>
            <Hover>
              <Link to='/completedbuilds' style={linkStyle}>
                See Completed Builds
              </Link>
            </Hover>          
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