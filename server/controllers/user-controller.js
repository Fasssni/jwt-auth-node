const userService = require("../services/user-service")

class UserController{ 

    async registration(req,res,next){ 
        try{ 
            const {email, password}=req.body
            const userData= await userService.registration(email, password)
            res.cookie('refresToken', userData.refreshToken,{maxAge:30*24*60*60*1000, httpOnly:true})
            res.status(200).json(userData)

        }catch(e){ 

            res.status(500).json(e)
            console.log(e.message)
           


        }

    }

    async login(req,res,next){ 
        try{ 
        res.status(200).json('success')
        }catch(e){
        } 

    }

    async logout(req,res,next){ 

        try{ 

        }catch(e){ 

        }


    }

    async activate(req,res,next){ 

        try{ 
            const activationLink=req.params.link 
            userService.activate(activationLink)
            return res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLd9auH4JIHvupoMgW5YfOjqtj6Lih0MKw&index=11")
        }catch(e){ 
            console.log(e)

        }
    }
     
    async refreshToken(req,res,next){ 

        try{ 

        }catch(e){ 

        }
    }

    async getUsers(req,res,next){ 

        try{ 

        }catch(e){ 

        }
    }
    
    
}

module.exports=new UserController()