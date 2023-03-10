const Router=require('express').Router
const userController = require('../controllers/user-controller.js')


const router=new Router()

router.post('/registration', userController.registration)
router.post('/login',userController.login)
router.post('/logout')

router.get('/activate/:link')
router.get('/refresh')
router.get('/get-users')


module.exports=router