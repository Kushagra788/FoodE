const express=require('express')
const router=express.Router()

router.post('/foodData',(req,res)=>{
    try {
       
        res.send([global.Data,global.Category]);
    } catch (error) {
        console.log(error.message);
        res.send("Server Error")
    }
})
module.exports=router;