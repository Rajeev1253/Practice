import express from 'express';
import { registerController } from '../controller/authController.js';
import multer from 'multer'
const upload = multer({ dest: 'uploads/' })

const router = express.Router();

router.post('/user',registerController)
router.post('/upload',upload.single('file'),(req,res)=>{
    res.send(`file uploaded successfully`)
})
router.get("/upload",(req,res)=>{
    res.render("upload")
})
router.post("/upload",(req,res)=>{
    res.send("Image uploaded")
})
export default router;