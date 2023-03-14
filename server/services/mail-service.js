const nodemailer=require('nodemailer')
const userModel = require('../models/user-model')

require('dotenv').config()

class MailService{ 
    constructor(){ 
       this.transporter=nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        secure:true, 
        auth:{
            user:process.env.SMTP_USER, 
            pass:process.env.SMTP_PASSWORD,

        }
       })


    }
    async sendActivation(to,link){
        try{
        this.transporter.sendMail({
            from:process.env.SMTP_USER,
            to, 
            subject:"Активация аккаунта на"+process.env.DOMEN,
            text:`Для активации аккаунта перейдите по следующей ссылке:${link}`
          
                    
        })
        }catch(e){ 
            
                await userModel.findByIdAndDelete({to})
                
                console.log(e.message)
                throw new Error("Эта хуйня снова не сработала")
    
      
        }
    }
}

module.exports= new MailService()