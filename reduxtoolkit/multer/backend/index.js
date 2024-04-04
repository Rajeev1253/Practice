import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import path from 'path'

const app = express()
app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+ "_"+ Date.now()+path.extname(file.originalname))
    }
   
})
const upload = multer({
    storage:storage

})
app.post('/upload',upload.array('file',4),(req,res,next)=>{
console.log(req.file)
res.send("sucessfully uploaded")
})


app.listen(8080,()=>{
    console.log("server is running")
})