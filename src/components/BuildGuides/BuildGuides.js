import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const BuildGuides = () => {
  return (
    <Wrapper>
      <div style={{width:'100%', background:'rgb(78,94,166)',height:'110px', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <h2 style={{color:'white', fontSize:'2rem', fontFamily:'Lato, sans-serif', marginLeft:'350px'}}>
            Personal Computer Chunks Build Guides
          </h2>      
      </div>   
      <div>
        <h1 style={{fontSize:'3rem', margin:'0 auto'}}>Currently under maintenance</h1>
      </div>
        {/* <ul style={{width:'70%', height:'100%', background:'red', marginLeft:'540px'}}>
          <li>
            <div style={{width:'100%', height:'250px', background:'yellow', border:'2px solid black'}}>

            </div>
          </li>
          <li>
            <div style={{width:'100%', height:'250px', background:'yellow', border:'2px solid black'}}>

            </div>
          </li>          
        </ul> */}
    </Wrapper>
  )
}
export default BuildGuides