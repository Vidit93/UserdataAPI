const express = require("express")
const router = express.Router();
const User = require("../models/user");

router.get('/', async(req,res)=>{
    try {
        const users = await User.find(req.query)
        res.json(users)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const users = await User.findById(req.params.id)
        res.json(users)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async(req,res)=>{
    const users = new User({
         name:req.body.name,
         number:req.body.number,
         e_mail:req.body.e_mail,
         pass:req.body.pass,
         cpass:req.body.cpass
    })
    try {
        const u1 = await users.save()
        res.json(u1)
    } catch (error) {
        res.send('error')
    }
})

module.exports = router;