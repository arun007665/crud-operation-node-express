//default controller

const user=require(`../model/user`)


const createuser=async (req,res)=>{
    try {
        //read the incomming form data
        let data=req.body
        //email veriication

        //validate using model
        let newuser=await user.create(req.body)
        return res.status(200).json({status:true,msg:"new user created",newuser})
    } catch (error) {
        return res.status(500).json({status:false,msg:"requested path not found"})
    }
}

//read-user

const readuser=async (req,res)=>{
    try {
        let users=await user.find({})
        return res.status(200).json({status:true,length:users.length,users})
    } catch (error) {
        return res.status(500).json({status:false,msg:"REquested Path NOt found"})
    }
}

//read single user
const readsingleuser=async (req,res)=>{
    try {
        let id=req.params.id
        let single=await user.findById(id)
            if(!single)
                return res.status(400).json({status:false,msg:"id not found"})

        return res.status(200).json({status:true,user:single})
    } catch (error) {
        return res.status(500).json({status:false,msg:"REquested Path NOt found"})
    }
}

//update user
const updateuser=async (req,res)=>{
    try {
        let id=req.params.id
        let single=await user.findById(id)
            if(!single)
                 return res.status(400).json({status:false,msg:"id not found"})
                await user.findByIdAndUpdate({_id: id},req.body)
        return res.status(200).json({status:true,msg:"Successfully Updated"})
    } catch (error) {
            if(error.codeName === "DuplicateKey"){
                return res.status(400).json({status:false,msg:`Duplicate input,value already Exists`})
            }
        return res.status(500).json({status:false,msg:"REquested Path Not found"})
    }
}
//update user
const deleteuser=async (req,res)=>{
    try {
        let id=req.params.id
        let single=await user.findById(id)
            if(!single)
             return res.status(400).json({status:false,msg:"id not found"})
            await user.findByIdAndDelete(id)
        return res.status(200).json({status:true,msg:" Account Successfully Deleted "})
    } catch (error) {
        return res.status(500).json({status:false,msg:"REquested Path NOt found"})
    }
}

//default users
const defaultCtrl=async (req,res)=>{
    return res.status(404).json({status:false,msg:"Request path not found"})
}

module.exports={deleteuser,readuser,readsingleuser,updateuser,createuser, defaultCtrl }