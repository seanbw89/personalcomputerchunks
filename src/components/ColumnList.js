import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'


const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  background:rgba(255,255,255,.5);
  flex-direction:column;
`
const Table = styled.table`
  width:80%;
  height:80vh;
  margin-top:50px;
`
const Ptag = styled.p`
  width:100%;
  display:flex;
  justify-content:flex-start;
  padding-top:10px;
  padding-bottom:40px;
  font-weight:bold;
`

const Button = styled.button`
  background:rgba(176,224,230,.2);
  border-radius:3px;
  width:90px;
  height:30px;
`
const linkStyle = {
  textDecoration:'none', 
  color:'inherit',  
}

class ColumnList extends Component {
  constructor(){
    super()
    this.state = {
      cpu:[],
      cooler:[],
      motherboard:[],
      memory:[],
      stor:[],
      videoCard:[],
      ccase:[],
      psu:[],
      userlist:[]
    }
  }
  componentDidMount(){
    let {cpu, cooler, motherboard, memory, stor, video, ccase, psu} = this.props
    if(cpu !== ''){
      axios.post('/api/singlecpu',{cpu}).then(res=>{        
          this.setState({cpu:res.data})
        })
    }
    if(cooler !== ''){
      axios.post('/api/singlecooler', {cooler}).then(res=>{
        this.setState({cooler:res.data})
      })
    }
    if(motherboard !== ''){
      axios.post('/api/singlemotherboard', {motherboard}).then(res=>{
        this.setState({motherboard:res.data})
      })
    }
    if(memory !== ''){
      axios.post('/api/getsinglememory', {memory}).then(res=>{
        this.setState({memory:res.data})
      })
    }
    if(stor !== ''){
      axios.post('/api/singlestorage', {stor}).then(res=>{
        this.setState({stor:res.data})
      })
    }
    if(video !== ''){
      axios.post('/api/singlevideocard', {video}).then(res=>{
        this.setState({videoCard:res.data})
      })
    }
    if(ccase !== ''){
      axios.post('/api/singlecase', {ccase}).then(res=>{
        this.setState({ccase:res.data})
      })
    }
    if(psu !== ''){
      axios.post('/api/singlepowersupply',{psu}).then(res=>{
        this.setState({psu:res.data})
      })
    }
  }
  saveList(){
    let {cpu,cooler,ccase,motherboard,memory,stor,video,psu} = this.props;
    let {user_id} = this.props.session
    if(cpu && cooler && ccase && motherboard && memory && stor && video && psu && user_id){
      axios.post('/api/createlist', {cpu, cooler, ccase, motherboard, memory, stor, video, psu,user_id}).then(res=>{
        this.setState({list:res.data})
      })
    }else{
      alert('You Need to have a full List')
    }
  }
  updateList(){
    let {cpu,cooler,ccase,motherboard,memory,stor,video,psu} = this.props;
    let {user_id} = this.props.session
    axios.put(`/api/updatelist/${user_id}`,{cpu,cooler,ccase,motherboard,memory,stor,video,psu}).then(res=>{
      console.log(res.data);
    })
  }
  render() {    
    console.log(this.props.session.user_id)
    return (           
      <Wrapper>
        <div style={{width:'100%', background:'rgb(84,84,123)',height:'110px', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <h2 style={{color:'white', fontSize:'2rem', fontFamily:'Lato, sans-serif', marginLeft:'350px'}}>
            Current Part List
          </h2>
        </div>
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
            <tr style={{height:'5px'}}>
              <td  style={{verticalAlign:'middle', paddingLeft:'20px', paddingTop:'-10px', paddingBottom:'-10px'}}>CPU</td>              
                <td style={{verticalAlign:'middle'}}>                  
                  <Link style={linkStyle} to='/cpu'>
                  <button style={{borderRadius:'4px', background:'rgb(26,123,188)', color:'white', border:'none', padding:'3px'}}>
                    Choose A CPU
                  </button>
                  </Link>  
                </td>
                <td></td>
                <td></td>            
            </tr>
            {
              this.props.cpu !== '' ?              
            <tr style={{height:'30px'}}>
            <td></td>
            <td style={{verticalAlign:'middle'}}>
              {
                this.state.cpu.map(e=> <p>{e.model}</p>)
              }
            </td>
            <td style={{ verticalAlign:'middle'}}>
              {
                this.state.cpu.map(e=> <p>{e.price}</p>)
              }
            </td>
            </tr>
            :null
            }            
            <tr style={{ height:'10px'}}>
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>CPU Cooler</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/cpucooler'>
                  <button style={{borderRadius:'4px', background:'rgb(26,123,188)', color:'white', border:'none', padding:'3px'}}>
                    Choose a Cpu Cooler
                  </button>
                  </Link>
                </td>
                <td></td>
                <td></td>  
            </tr>
            {
              this.props.cooler !== '' ?              
            <tr style={{height:'30px'}}>
            <td></td>
            <td style={{verticalAlign:'middle'}}>
              {
                this.state.cooler.map(e=> <p>{e.model}</p>)
              }
            </td>
            <td style={{ verticalAlign:'middle'}}>
              {
                this.state.cooler.map(e=> <p>{e.price}</p>)
              }
            </td>
            </tr>
            :null
            }            
            <tr style={{height:'10px'}}>              
              <td style={{verticalAlign:'middle', paddingLeft:'20px'}}>Motherboard</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/mb'>
                  <button style={{borderRadius:'4px', background:'rgb(26,123,188)', color:'white', border:'none', padding:'3px'}}>
                    Choose a MB
                  </button>
                  </Link>
                </td>
                <td></td>
                <td></td>
            </tr>
            {
            this.props.motherboard !== '' ?              
            <tr style={{height:'30px'}}>
            <td></td>
            <td style={{verticalAlign:'middle'}}>
              {
                this.state.motherboard.map(e=> <p>{e.model}</p>)
              }
            </td>
            <td style={{ verticalAlign:'middle'}}>
              {
                this.state.motherboard.map(e=> <p>{e.price}</p>)
              }
            </td>
            </tr>
            :null
            }
            <tr style={{height:'10px'}}> 
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>Memory</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/memory'>
                  <button style={{borderRadius:'4px', background:'rgb(26,123,188)', color:'white', border:'none', padding:'3px'}}>
                    Choose Memory
                  </button>
                  </Link>
                </td>
                <td></td>
                <td></td>
            </tr>
            {
            this.props.memory !== '' ?              
            <tr style={{height:'30px'}}>
            <td></td>
            <td style={{verticalAlign:'middle'}}>
              {
                this.state.memory.map(e=> <p>{e.model}</p>)
              }
            </td>
            <td style={{ verticalAlign:'middle'}}>
              {
                this.state.memory.map(e=> <p>{e.price}</p>)
              }
            </td>
            </tr>
            :null
            }
            <tr style={{height:'10px'}}>              
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>Storage</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/storage'>
                  <button style={{borderRadius:'4px', background:'rgb(26,123,188)', color:'white', border:'none', padding:'3px'}}>
                    Choose Storage
                  </button>
                  </Link>
                </td>
                <td></td>
                <td></td>
            </tr>
            {
            this.props.stor !== '' ?              
            <tr style={{height:'30px'}}>
            <td></td>
            <td style={{verticalAlign:'middle'}}>
              {
                this.state.stor.map(e=> <p>{e.model}</p>)
              }
            </td>
            <td style={{ verticalAlign:'middle'}}>
              {
                this.state.stor.map(e=> <p>{e.price}</p>)
              }
            </td>
            </tr>
            :null
            }
            <tr style={{height:'10px'}}>              
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>Video Card</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/video'>
                  <button style={{borderRadius:'4px', background:'rgb(26,123,188)', color:'white', border:'none', padding:'3px'}}>
                    Choose Video Card
                  </button>
                  </Link>
                </td>
                <td></td>
                <td></td>
            </tr>
            {
            this.props.video !== '' ?              
            <tr style={{height:'30px'}}>
            <td></td>
            <td style={{verticalAlign:'middle'}}>
              {
                this.state.videoCard.map(e=> <p>{e.model}</p>)
              }
            </td>
            <td style={{ verticalAlign:'middle'}}>
              {
                this.state.videoCard.map(e=> <p>{e.price}</p>)
              }
            </td>
            </tr>
            :null
            }
            <tr style={{height:'10px'}}>              
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>Case</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/case'>
                  <button style={{borderRadius:'4px', background:'rgb(26,123,188)', color:'white', border:'none', padding:'3px'}}>
                    Choose A Case
                  </button>
                  </Link>
                </td>
                <td></td>
                <td></td>
            </tr>
            {
            this.props.ccase !== '' ?              
            <tr style={{height:'30px'}}>
            <td></td>
            <td style={{verticalAlign:'middle'}}>
              {
                this.state.ccase.map(e=> <p>{e.model}</p>)
              }
            </td>
            <td style={{ verticalAlign:'middle'}}>
              {
                this.state.ccase.map(e=> <p>{e.price}</p>)
              }
            </td>
            </tr>
            :null
            }
            <tr style={{backgroundColor:'rgba(192,192,192,.2)',  height:'10px'}}>              
              <td  style={{verticalAlign:'middle', paddingLeft:'20px'}}>Power Supply</td>
                <td  style={{verticalAlign:'middle'}}>
                  <Link style={linkStyle} to='/psu'>
                  <button style={{borderRadius:'4px', background:'rgb(26,123,188)', color:'white', border:'none', padding:'3px'}}>
                    Choose A PSU
                  </button>
                  </Link>
                </td>
                <td></td>
                <td></td>
            </tr>
            {
            this.props.psu !== '' ?              
            <tr style={{height:'30px'}}>
            <td></td>
            <td style={{verticalAlign:'middle'}}>
              {
                this.state.psu.map(e=> <p>{e.model}</p>)
              }
            </td>
            <td style={{ verticalAlign:'middle'}}>
              {
                this.state.psu.map(e=> <p>{e.price}</p>)
              }
            </td>
            </tr>
            :null
            }
          </tbody>
        </Table>
        <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center',}}>
          <div style={{paddingRight:'10px'}}>
          {
            this.state.userlist === [] 
            ?
            <Button onClick={()=> this.updateList()}>Update List</Button>
            :
            <Button onClick={()=> this.saveList()}>Save List</Button>

          }
          </div>          
        </div>                
      </Wrapper>
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
export default withRouter(connect(mapState)(ColumnList))