const express= require('express')
const cors= require('cors')
const cookieParser=require('cookie-parser')
const mongoose=require('mongoose')
const router= require('./router/index.js')

const env=require('dotenv')

env.config()

const PORT=process.env.PORT

const app= express()

app.use(cors())
app.use(cookieParser())
app.use(express.json()) 
app.use("/api",router)

async function startApp(){ 
    try{ 
        mongoose.connect(process.env.MONGO,{ 
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        app.listen(PORT,()=>console.log(`Started at ${PORT}`))
    }catch(e){
        console.log(e)
    }
}

startApp()

