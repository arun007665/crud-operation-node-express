//default controller
const userrouter=require('express').Router()
const {readuser,updateuser,readsingleuser,createuser,defaultCtrl, deleteuser}=require(`./../controller/usercontroller`)
//create=>post
userrouter.post(`/api/user/add`,createuser)
//readall=>get
userrouter.get(`/api/user/all`,readuser)
//readsingleuser=>get
userrouter.get(`/api/user/single/:id`,readsingleuser)

//update user->put/pitch
userrouter.patch('/api/user/update/:id',updateuser)
//delete user->del
userrouter.delete(`/api/user/delete/:id`,deleteuser)

userrouter.all(`*`,defaultCtrl)

module.exports=userrouter

