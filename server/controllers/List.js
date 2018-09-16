module.exports = {
  CreateList: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let {cpu, cooler, ccase, motherboard, memory, stor, video, psu, user_id} = req.body
      let newList = await db.UserList.create_list([
        cpu,
        cooler , 
        motherboard , 
        memory , 
        stor, 
        psu , 
        video , 
        ccase ,
        user_id])
      res.send(newList)
    } catch (error) {
      console.log(error)
    }
  },
  updateList: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let {cpu, cooler, ccase, motherboard, memory, stor, video, psu, user_id} = req.body
      let userLists = db.UserList.get_user_list(user_id)
      let updatedList = await db.UserList.update_list([cpu ,cooler ,motherboard ,memory ,stor ,psu ,video ,ccase ,user_id ])
      if(userLists !== updatedList){
        res.send(updatedList)
      }else{
        res.send(UserList)
      }
    } catch (error) {
      console.log(error);
    }
  },
  getAllList: async (req,res)=>{
    try {
      let db = req.app.get('db')
      let allLists = await db.UserList.get_all_lists()
      res.send(allLists)
    } catch (error) {
      console.log(error);
    }
  }
}