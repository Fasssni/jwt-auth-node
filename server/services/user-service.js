const userModel = require("../models/user-model");
const bcrypt=require('bcrypt')
const uuid=require('uuid');
const mailService = require("./mail-service");
const { generateToken } = require("./token-service");
const UserDto = require("../dtos/user-dto");



class UserService{
    async registration(email,password){
        const isUser=await userModel.findOne({email})
        if(isUser){
            throw new Error(`Пользователь с почтой ${email} уже существует`)
        }
        const activationLink=uuid.v4()
        const hashedPassword= await bcrypt.hash(password,3)
        const user = await userModel.create({email, password:hashedPassword, activationLink})
        await mailService.sendActivation(email,activationLink)
        const userDto=new UserDto(user)
        const tokens=generateToken(userDto)
    }
}

module.exports=new UserService()