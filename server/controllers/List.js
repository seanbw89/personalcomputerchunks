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
  }
}