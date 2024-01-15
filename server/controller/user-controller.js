import User from "../model/user.js";

export default function signupUser(requset,response){
    try{
        const user = requset.body;

        const newUser = new User(user);
        newUser.save();
        
        return response.status(200).json({msg:"signup sucessfull"})
    } catch (error){
        return response.status(500).json({msg:'Error while signup the user'})
    }
}
