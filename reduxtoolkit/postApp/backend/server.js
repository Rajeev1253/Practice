import express from 'express'
import dotenv from 'dotenv'
import router from './routes/authroute.js';
import connectDB from './config/db.js';
dotenv.config()
connectDB();
const app = express();
app.use(express.json())
app.set("view Engine","ejs");
app.use('/', router)

const port = process.env.PORT || 8080;


app.listen(port,()=>{
    console.log(`app is listening on ${port} successfully`)
})