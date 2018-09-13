const initState = {
  cpu:'',
  cooler:'',
  ccase:'',
  motherboard:'',
  memory:'',
  stor:'',
  video:'',
  psu:'',
  session:{}  
}

const ADD_CPU = 'ADD_CPU'
const ADD_SESSION = 'ADD_SESSION'
const ADD_COOLER = 'ADD_COOLER'
const ADD_MB = 'ADD_MB'
const ADD_CASE = 'ADD_CASE'
const ADD_MEM = 'ADD_MEM'
const ADD_STOR = 'ADD_STOR'
const ADD_VIDEO = 'ADD_VIDEO'
const ADD_PSU = 'ADD_PSU'

export function addCpu(id){
  return{
    type:ADD_CPU,
    payload:id
  }
}
export function addCooler(id){
  return{
    type:ADD_COOLER,
    payload:id
  }
}
export function addMb(id){
  return{
    type:ADD_MB,
    payload:id
  }
}
export function addCase(id){
  return{
    type:ADD_CASE,
    payload:id
  }
}
export function addMem(id){
  return{
    type:ADD_MEM,
    payload:id
  }
}
export function addStor(id){
  return{
    type:ADD_STOR,
    payload:id
  }
}
export function addVideo(id){
  return{
    type:ADD_VIDEO,
    payload:id
  }
}
export function addPsu(id){
  return{
    type:ADD_PSU,
    payload:id
  }
}


export function addSession(req){
  return{
    type:ADD_SESSION,
    payload:req
  }
}
export default function reducer(state = initState, action){
  switch(action.type){
    case ADD_SESSION:
    return {...initState, session:{...action.payload}}
    case ADD_CPU:
    return Object.assign({},state,{cpu:action.payload})
    case ADD_COOLER:
    return Object.assign({},state,{cooler:action.payload})
    case ADD_CASE:
    return Object.assign({},state,{case:action.payload})
    case ADD_MB:
    return Object.assign({},state,{motherboard:action.payload})
    case ADD_MEM:
    return Object.assign({},state,{memory:action.payload})
    case ADD_STOR:
    return Object.assign({},state,{stor:action.payload})
    case ADD_VIDEO:
    return Object.assign({},state,{video:action.payload})
    case ADD_PSU:
    return Object.assign({},state,{psu:action.payload})
    default:    
    return state
  }
}