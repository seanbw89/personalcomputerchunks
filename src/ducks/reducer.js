const initState = {
  cpu:'',
  session:{}  
}

const ADD_CPU = 'ADD_CPU'
const ADD_SESSION = 'ADD_SESSION'

export function addCpu(id){
  return{
    type:ADD_CPU,
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
    return {...initState, cpu:action.payload}    
    default:    
    return state
  }
}