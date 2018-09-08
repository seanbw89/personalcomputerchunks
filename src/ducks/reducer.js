const initState = {
  cpu:0,
  cooler:0,
  ccase:0,
  motherboard:0,
  session:{}  
}

const ADD_CPU = 'ADD_CPU'
const ADD_SESSION = 'ADD_SESSION'
const ADD_COOLER = 'ADD_COOLER'
const ADD_MB = 'ADD_MB'
const ADD_CASE = 'ADD_CASE'

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
    default:    
    return state
  }
}