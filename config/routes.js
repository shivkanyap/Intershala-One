const express=require('express')
const router=express.Router()
const {collegeRouter} =require('../app/controllers/CollegeController')
const {studentRouter}=require('../app/controllers/StudentController')

router.use('/college',collegeRouter)
router.use('/student',studentRouter)
module.exports={
    routes:router
}