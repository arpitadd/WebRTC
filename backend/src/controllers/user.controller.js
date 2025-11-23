import { User } from "../models/user.model";
import httpStatus from "http-status"
import bcrypt,{hash} from "bcrypt"

const login=async(req,res)=>{
    const {username,password}=req.body
    if(!username || !password){
        return res.status(400).json({message:"Please Provide!"})
    }
    try{
        const user=await User.find({username})
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message:"User Not Found !"})
        }
if(bcrypt.compare(password,user.password)){
    let token=crypto.randomBytes(20).toString("hex")
    user.token=token
    await user.save()
    return res.status(httpStatus.OK).json({token:token})
}
    }catch(e){
return res.json({msg:`Something went wrong $(e)`})
    }
}
const register=async(req,res)=>{
    const {name,username,password}=req.body
    try{
        const existinguser=await User.findOne({username})
        if(existinguser){
            return res.status(httpStatus.FOUND).json({message:"User already exists!"})
        }
        const hashedpassword=await bcrypt.hash(password,10)
        const newUser=new User({
            name:name,
            username:username,
            password:hashedpassword
        })
        await newUser.save()
        res.status(httpStatus.CREATED).json({message:"User registred"})

    }catch(e){
       return res.json({msg:`Something went wrong $(e)`})

    }
}

export {login,register}