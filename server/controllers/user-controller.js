const userService = require("../services/user-service")

class UserController{ 

    async registration(req,res,next){ 
        try{ 
            userService.registration(req.body.email, req.body.password)
            res.status(200).json('successfully registered')

        }catch(e){ 
            res.status(500).json(e)


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

        }catch(e){ 

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