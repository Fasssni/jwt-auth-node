const {Schema, model}= require('mongoose')


const TokenSchema=new Schema({
    user: {type:Schema.Types.ObjectId, ref:'UserSchema'},
    refreshToken:{type:String, required:true}
})

module.exports=model("TokenSchema",TokenSchema)